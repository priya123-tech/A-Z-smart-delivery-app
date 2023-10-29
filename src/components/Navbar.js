// Navbar.js
// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="My app">My App</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="our services">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Rate us">Rate Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;