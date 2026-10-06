/**
 * Shapes the sparkles treat as "not the dark background" (like the blue hero shape).
 * Moving the cursor onto one makes the sparkles scatter instead of following.
 */
export interface SparkleMask {
  el: SVGSVGElement;
  path: Path2D;
  viewBox: [number, number];
}

const masks = new Set<SparkleMask>();

export function registerSparkleMask(el: SVGSVGElement, pathData: string, viewBox: [number, number]) {
  const mask: SparkleMask = { el, path: new Path2D(pathData), viewBox };
  masks.add(mask);
  return () => {
    masks.delete(mask);
  };
}

export const getSparkleMasks = () => masks;
