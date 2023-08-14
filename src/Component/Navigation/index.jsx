import React, { useState } from "react";
import './style.css';

export const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
  };

  return (
    <div>
      <div className="nav-bar-container">
        <a href="/" className="logo">Foodish</a>

        <div className={`nav ${selectedNav === null ? 'selected' : ''}`}
          onClick={() => handleNavClick(null)}>
          <a href="#" className={`nav-link ${selectedNav === null ? 'active' : ''}`}
            onClick={() => handleNavClick(null)}>
            Home
          </a>
          <a href="#" className={`nav-link ${selectedNav === 'offer' ? 'active' : ''}`}
            onClick={() => handleNavClick('offer')}>
            Offer
          </a>
          <a href="#" className={`nav-link ${selectedNav === 'service' ? 'active' : ''}`}
            onClick={() => handleNavClick('service')}>
            Service
          </a>
          <a href="#" className={`nav-link ${selectedNav === 'menu' ? 'active' : ''}`}
            onClick={() => handleNavClick('menu')}>
            Menu
          </a>
          <a href="#" className={`nav-link ${selectedNav === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}>
            About Us
          </a>
        </div>

        <div>
          <button className="login-btn">Login</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
