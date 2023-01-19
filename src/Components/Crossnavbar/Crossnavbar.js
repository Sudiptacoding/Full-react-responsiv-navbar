import React from 'react';
import { NavLink } from 'react-router-dom';
import './Crossnavbar.css';

const Crossnavbar = () => {
    return (
        <div>
            <header className="header">
                <NavLink to='/' className='logo'>SB</NavLink>
                <input className="side-menu" type="checkbox" id="side-menu" />
                <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
                <nav className="nav">
                    <ul className="menu">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contuct</NavLink></li>
                        <li><NavLink to='/'>Blogs</NavLink></li>
                        <li><NavLink to='/'>Login</NavLink></li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Crossnavbar;