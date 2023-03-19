import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <Link to='/' className="px-3">Branding</Link>
    <Link to='/' className="px-3">Design</Link>
    <Link to='/' className="px-3">Marketing</Link>
    <Link to='/' className="px-3">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to='/' className="px-3">About us</Link>
    <Link to='/' className="px-3">Contact</Link>
    <Link to='/' className="px-3">Jobs</Link>
    <Link to='/' className="px-3">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to='/' className="px-3">Terms of use</Link>
    <Link to='/' className="px-3">Privacy policy</Link>
    <Link to='/' className="px-3">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;