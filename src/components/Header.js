// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/">Hotels</Link></li>
      </ul>
    </nav>
  );
}

export default Header;