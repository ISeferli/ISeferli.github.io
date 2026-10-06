import { Link, NavLink } from 'react-router-dom';
import { about } from '../data/about';

export function Nav() {
  return (
    <header className="site-nav">
      <div className="container">
        <Link to="/" className="wordmark">
          {about.name}
        </Link>
        <nav className="nav-links" aria-label="Main">
          <NavLink to="/" end>
            Projects
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
