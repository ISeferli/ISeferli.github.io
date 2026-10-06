import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes the build work from any folder (GitHub Pages, itch.io, Netlify...)
export default defineConfig({
  plugins: [react()],
  base: './',
});
