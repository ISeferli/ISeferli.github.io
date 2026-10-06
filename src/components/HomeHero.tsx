import { useEffect, useRef } from 'react';
import { about } from '../data/about';
import { registerSparkleMask } from './sparkleMasks';
import { SocialLinks } from './SocialLinks';

// The right-hand edge of the shape. Edit the numbers to reshape the curve
// (the drawing area is 600 wide by 800 tall and stretches to fit the hero).
const CURVE = 'C470,120 452,240 468,370 C484,500 444,628 334,722 C262,784 168,800 0,800';
const FILL_PATH = `M0,0 L520,0 ${CURVE} Z`;
const EDGE_PATH = `M520,0 ${CURVE}`;
const VIEWBOX: [number, number] = [600, 800];

export function HomeHero() {
  const shapeRef = useRef<SVGSVGElement>(null);

  // Tell the sparkles this shape isn't part of the dark background
  useEffect(() => {
    if (shapeRef.current) return registerSparkleMask(shapeRef.current, FILL_PATH, VIEWBOX);
  }, []);

  return (
    <section className="hero">
      <svg ref={shapeRef} className="hero-shape" viewBox="0 0 600 800" preserveAspectRatio="none" aria-hidden="true">
        <path className="hero-shape-edge" d={EDGE_PATH} transform="translate(22 0)" />
        <path className="hero-shape-fill" d={FILL_PATH} />
      </svg>

      <div className="hero-inner">
        <div className="hero-brand">
          <h1 className="hero-name">
            {about.logo ? <img className="hero-logo" src={about.logo.src} alt={about.name} /> : about.name}
          </h1>
          <p className="hero-role">{about.role}</p>
          <SocialLinks socials={about.socials} />
        </div>

        <div className="hero-intro">
          <p className="hero-headline">{about.headline}</p>
          <p>{about.intro}</p>
        </div>
      </div>
    </section>
  );
}
