import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "Reviews", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">TaskFlow</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
