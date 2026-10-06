import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { AboutPage } from './pages/AboutPage';
import { about } from './data/about';
import { Sparkles } from './components/Sparkles';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {window.scrollTo(0, 0), [pathname]});
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Sparkles />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <div className="container not-found">
                <h1>This page doesn't exist</h1>
                <Link to="/">Go to all projects</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {about.name}
        </div>
      </footer>
    </>
  );
}
