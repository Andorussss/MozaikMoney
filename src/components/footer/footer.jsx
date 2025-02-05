import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                © 2023 Mozaik Money
            </p>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pricing">Privacy Policy</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;