import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// HashRouter works on static hosts (GitHub Pages, itch.io) without server config.
// Embedded previews (sandboxed iframes) can't change the URL, so they use
// MemoryRouter instead: build with `VITE_PREVIEW=true npm run build`.
const Router = import.meta.env.VITE_PREVIEW === 'true' ? MemoryRouter : HashRouter;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
