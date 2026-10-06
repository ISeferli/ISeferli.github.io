import type { ReactNode } from 'react';
import type { Social } from '../data/about';

// Simple outline icons. Swap in official brand icons (e.g. the simple-icons package) if you prefer.
const ICONS: Record<Social['kind'], ReactNode> = {
  linkedin: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M5.8 16.5c.8-1.7 1.9-2.4 3.2-2.4s2.4.7 3.2 2.4M14.5 9.5h4M14.5 13.5h4" />
    </>
  ),
  github: <path d="m8 6-6 6 6 6M16 6l6 6-6 6M13.5 4l-3 16" />,
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  link: (
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  ),
};

interface Props {
  socials: Social[];
  className?: string;
}

export function SocialLinks({ socials, className = '' }: Props) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map((s) => (
        <li key={s.url}>
          <a href={s.url} {...(s.kind === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {ICONS[s.kind]}
            </svg>
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
