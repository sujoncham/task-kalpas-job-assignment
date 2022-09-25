import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    const myNavbar = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {myNavbar}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {myNavbar}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden"><FaExchangeAlt /></label>
                <button className='btn btn-sm'>Login</button>
            </div>
        </div>
    );
};

export default Header;