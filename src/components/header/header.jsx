import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-icon">$</span>
                <span className="logo-text">AI Financial</span>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                </ul>
            </nav>
            <Link to="/sign-up">
                <button className="login-btn">Log In</button>
            </Link>

        </header>

    );
};

export default Header;