// Navbar jsx



import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">WebParrots</Link>
        </div>
      
     
          <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/listing" className="nav-link">
                Listing
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      
        
        
        <div className="user-login">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
