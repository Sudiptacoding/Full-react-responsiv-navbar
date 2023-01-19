import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.css';
const SideNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
                <h1 className="logo">Navbar</h1>
            </div>
        </nav>
    );
};

export default SideNavbar;