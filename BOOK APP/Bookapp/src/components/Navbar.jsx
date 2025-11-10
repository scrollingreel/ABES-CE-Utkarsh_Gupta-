import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">📚 BookVerse</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/library" onClick={() => setMenuOpen(false)}>Library</Link>
        </li>
        <li>
          <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
        </li>
        <li>
          <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Cart</Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
