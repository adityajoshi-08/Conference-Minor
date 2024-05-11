import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav1.css"
// import "./Nav.css"

export default function Nav() {  
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img src="images/logos/ICCAI_Logo.png" alt="" className="logo" />
      </Link>
      <ul className={isOpen ? 'active' : ''}>  {/* Add active class for mobile menu */}
        <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/#partners">PARTNERS</a>
          </li>
          <li>
            <a href="/panel">PANEL</a>
          </li>
          <li>
            <a href="/tracks">TRACKS</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>

      </ul>
      {/* Mobile menu toggle button */}
      <button className="menuToggle" onClick={toggleMenu}>
        {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
    </nav>)
}
