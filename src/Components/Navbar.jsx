import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
function NavBar() {
  return (
    <nav className="navbar">
        <h3 className="logo">LOGO</h3>
        <ul className="nav-links">
            <Link to="/#" className="home">
                <li>Home</li>
            </Link>
            <Link to="/AboutUs" className="about">
                <li>About</li>
            </Link>
            <Link to="/" className="contact">
                <li>Contact</li>
            </Link>
            <Link to="/" className="payments">
                <li>Payments</li>
            </Link>
            
        </ul>
    </nav>
  )
}

export default NavBar
