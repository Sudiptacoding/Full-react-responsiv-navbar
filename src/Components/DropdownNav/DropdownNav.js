import React from 'react';
import { NavLink } from 'react-router-dom';
import './DropdownNav.css';

const DropdownNav = () => {
    return (
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
    );
};

export default DropdownNav;