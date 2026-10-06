import { useEffect, useRef } from 'react';
import { getSparkleMasks } from './sparkleMasks';

/**
 * Site-wide sparkles on a fixed canvas behind all content.
 * Opaque elements (the blue hero shape, cards, panels, images) sit on top,
 * so sparkles only show through on the dark background.
 */

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number; // wander direction
  size: number;
  alpha: number;
  color: string;
  phase: number;
  twinkle: number;
  follow: number; // how strongly this one follows the cursor
  orbitR: number; // each sparkle circles its own spot near the cursor
  orbitSpeed: number;
  orbitPhase: number;
  depth: number; // how much it moves when the page scrolls (parallax)
}

// Moon white, bronze and silver from the Ravenclaw palette
const COLORS = ['238,241,247', '238,241,247', '238,241,247', '217,168,102', '217,168,102', '174,182,200'];

// ✏️ Tuning
const FOLLOW_STRENGTH = 0.0009; // higher = follows the cursor more
const SCATTER_SPEED: [number, number] = [1.2, 4.5]; // how hard they fly off when the cursor leaves
const DENSITY = 1000; // screen pixels per sparkle (lower = more sparkles)
const MAX_SPARKLES = 300;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let sparkles: Sparkle[] = [];
    const pointer = { x: 0, y: 0, active: false };
    let raf = 0;
    let running = false;
    let last = performance.now();
    let lastScroll = window.scrollY;

    /** True when a screen point is on a registered shape rather than the dark background. */
    const onShape = (x: number, y: number) => {
      for (const mask of getSparkleMasks()) {
        const r = mask.el.getBoundingClientRect();
        if (r.width === 0 || x < r.left || x > r.right || y < r.top || y > r.bottom) continue;
        const lx = ((x - r.left) / r.width) * mask.viewBox[0];
        const ly = ((y - r.top) / r.height) * mask.viewBox[1];
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const inside = ctx.isPointInPath(mask.path, lx, ly);
        ctx.restore();
        if (inside) return true;
      }
      return false;
    };

    const createSparkle = (): Sparkle => {
      const big = Math.random() < 0.22;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.2, 0.2),
        vy: rand(-0.2, 0.2),
        angle: rand(0, Math.PI * 2),
        size: big ? rand(2.6, 5) : rand(0.7, 1.8),
        alpha: rand(0.45, 1),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: rand(0, Math.PI * 2),
        twinkle: rand(0.5, 1.6),
        follow: rand(0.35, 1),
        orbitR: rand(40, 240),
        orbitSpeed: rand(0.2, 0.8) * (Math.random() < 0.5 ? -1 : 1),
        orbitPhase: rand(0, Math.PI * 2),
        depth: big ? rand(0.3, 0.5) : rand(0.08, 0.25),
      };
    };

    /** When the cursor leaves, every sparkle flies off in its own direction. */
    const scatter = () => {
      for (const p of sparkles) {
        const a = rand(0, Math.PI * 2);
        const speed = rand(SCATTER_SPEED[0], SCATTER_SPEED[1]);
        p.vx += Math.cos(a) * speed;
        p.vy += Math.sin(a) * speed;
        p.angle = a;
      }
    };

    const wrap = (p: Sparkle) => {
      const m = 12;
      if (p.x < -m) p.x = width + m;
      if (p.x > width + m) p.x = -m;
      if (p.y < -m) p.y = height + m;
      if (p.y > height + m) p.y = -m;
    };

    const step = (dt: number, time: number) => {
      const damping = Math.pow(pointer.active ? 0.94 : 0.985, dt);
      for (const p of sparkles) {
        // Gentle random wandering
        p.angle += (Math.random() - 0.5) * 0.18 * dt;
        p.vx += Math.cos(p.angle) * 0.004 * dt;
        p.vy += Math.sin(p.angle) * 0.004 * dt;

        // Lazy follow toward a personal spot circling the cursor
        if (pointer.active) {
          const orbit = time * 0.001 * p.orbitSpeed + p.orbitPhase;
          const dx = pointer.x + Math.cos(orbit) * p.orbitR - p.x;
          const dy = pointer.y + Math.sin(orbit) * p.orbitR - p.y;
          const dist = Math.hypot(dx, dy);
          const pull = p.follow * FOLLOW_STRENGTH * Math.max(0.12, 1 - dist / 650);
          p.vx += dx * pull * dt;
          p.vy += dy * pull * dt;
        }

        p.vx *= damping;
        p.vy *= damping;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        wrap(p);
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of sparkles) {
        const tw = 0.55 + 0.45 * Math.sin(time * 0.002 * p.twinkle + p.phase);
        const a = p.alpha * tw;
        const r = p.size * (0.75 + 0.35 * tw);
        if (p.size > 2.4) {
          // Soft glow + four-pointed star
          ctx.fillStyle = `rgba(${p.color},${a * 0.18})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 1.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(${p.color},${a})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - r * 1.6);
          ctx.quadraticCurveTo(p.x, p.y, p.x + r * 1.6, p.y);
          ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + r * 1.6);
          ctx.quadraticCurveTo(p.x, p.y, p.x - r * 1.6, p.y);
          ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - r * 1.6);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(${p.color},${a})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      step(dt, now);
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reducedMotion) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(MAX_SPARKLES, Math.round((width * height) / DENSITY));
      sparkles = Array.from({ length: count }, createSparkle);
      draw(performance.now());
    };

    const leave = () => {
      if (pointer.active) scatter();
      pointer.active = false;
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (onShape(e.clientX, e.clientY)) leave();
      else pointer.active = true;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType === 'touch') leave();
    };

    // Sparkles drift slowly with the page when scrolling, bigger ones faster (parallax)
    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      for (const p of sparkles) {
        p.y -= delta * p.depth;
        wrap(p);
      }
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    if (!reducedMotion) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('blur', leave);
      document.documentElement.addEventListener('mouseleave', leave);
    }

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('blur', leave);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <canvas ref={canvasRef} className="site-sparkles" aria-hidden="true" />;
}
