
import React from 'react';

export const StarSeparator: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className={`h-1 w-20 rounded ${light ? 'bg-white' : 'bg-slate-800'}`}></div>
    <div className={light ? 'text-white' : 'text-slate-800'}>
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
    <div className={`h-1 w-20 rounded ${light ? 'bg-white' : 'bg-slate-800'}`}></div>
  </div>
);

export const COLORS = {
  primary: '#7A73D1',
  secondary: '#211C84',
  light: '#B5A8D5',
};
