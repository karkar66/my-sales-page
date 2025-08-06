import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="navbar-title">Alex Tan</div>

      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <a href="#about" onClick={() => setOpen(false)}>Bio</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}
