import React from 'react';
import { NavLink } from 'react-router';
import navIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav flex gap-5 text-accent ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrer">Carrer</NavLink>
            </div>
            <div className="login-btn flex gap-4">
                <img src={navIcon} alt="nav user icon" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;