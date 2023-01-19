import React from 'react';
import { NavLink } from 'react-router-dom';

import './FullNavbar.css';

const FullNavbar = () => {
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
                    <nav class="dropdownmenu">
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/'>About</NavLink>
                                <ul id="submenu">
                                    <li><NavLink to='/'>Sub1</NavLink></li>
                                    <li><NavLink to='/'>Sub12</NavLink></li>
                                    <li><NavLink to='/'>Sub3</NavLink></li>
                                    <li><NavLink to='/'>Sub4</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='/'>Contuct</NavLink></li>
                            <li><NavLink to='/'>Contuct</NavLink></li>


                        </ul>
                    </nav>
                </ul>
                <h1 className="logo">Navbar</h1>
            </div>
        </nav>
    );
};

export default FullNavbar;