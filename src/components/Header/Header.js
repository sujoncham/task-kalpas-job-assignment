import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header className='header'>
            <div className="container mx-auto px-10">
                <div className='flex justify-between items-center p-3'>
                    <Link to='/'>Kalpas Limited</Link>
                        <ul className=' flex justify-between items-center p-3 gap-3'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;