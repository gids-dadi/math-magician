import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="header">
        <h1>Math Magician</h1>
      </div>
      <nav className="nav-item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/calculator">Calculator</Link>
          </li>

          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
