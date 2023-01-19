import React from 'react';
import { NavLink } from 'react-router-dom';
import './Fulldisplaynav.css';

const Fulldisplaynav = () => {
    return (
        <div className="nav">
            <input type="checkbox" name="" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    JoGeek
                </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>


            <div className="nav-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Contuct</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>
        </div>
    );
};

export default Fulldisplaynav;