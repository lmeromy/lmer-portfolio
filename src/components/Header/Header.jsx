import { Link } from 'gatsby';
import React from 'react';
import './Header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">LMER</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="about" smooth duration={1000}>
              About
            </Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
