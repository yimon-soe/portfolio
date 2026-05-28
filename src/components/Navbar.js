import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-bracket">&lt;</span>
          <span className="navbar__brand-name">YS</span>
          <span className="navbar__brand-bracket">/&gt;</span>
        </Link>

        <ul className="navbar__links">
          <li>
            <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
              <span className="navbar__link-index">01.</span> Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`navbar__link ${location.pathname === '/blog' ? 'navbar__link--active' : ''}`}>
              <span className="navbar__link-index">02.</span> Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
