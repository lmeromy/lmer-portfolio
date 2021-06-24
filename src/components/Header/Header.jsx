import { Link } from 'react-scroll';
import React from 'react';
import './Header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="hero">LMER</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="about" smooth duration={1000}>
              About
            </Link>
            <Link to="projects" smooth duration={1000}>
              Projects
            </Link>
            <Link to="contact" smooth duration={1000}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
