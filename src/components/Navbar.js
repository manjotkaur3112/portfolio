import React, { useState } from 'react';
import App from '../App';
import index from '../index';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="navbar-container w-full fixed bg-gray-800 z-50 top-0 left-0">
                <div className='flex items-center justify-between px-10 py-3'>
                        <div className="navbar-logo">
                            <h1 className="navbar-title gradient-text">Manjot Kaur</h1>
                        </div>
                        <div className='topnav'>
                            <div className={`navbar-links ${show ? "active" : ""}`}>
                                <a href="#home" className="navbar-link hover:text-blue-100">Home</a>
                                <a href="#about" className="navbar-link hover:text-blue-100">About</a>
                                <a href="#education" className="navbar-link hover:text-blue-100">Education</a>
                                <a href="#skills" className="navbar-link hover:text-blue-100">Skills</a>
                                <a href="#projects" className="navbar-link hover:text-blue-100">Projects</a>
                                <a href="#certifications" className="navbar-link hover:text-blue-100">Certifications</a>
                                <a href="#contact" className="navbar-link hover:text-blue-100">Contact</a>
                            </div>
                            <div className='hamburger' onClick={() => setShow(!show)}>
                                <GiHamburgerMenu/>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;