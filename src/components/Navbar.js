import React from 'react';
import App from '../App';
import index from '../index';

const Navbar = () => {


    return (
        <>
            <div className="navbar-container flex items-center justify-between p-4 px-16 bg-gray-800">
                <div className="navbar-logo">
                    <h1 className="navbar-title gradient-text">Manjot Kaur</h1>
                </div>
                <div className="navbar-links flex flex-wrap items-center gap-12">
                    <a href="#home" className="navbar-link hover:text-blue-100">Home</a>
                    <a href="#about" className="navbar-link hover:text-blue-100">About</a>
                    <a href="#education" className="navbar-link hover:text-blue-100">Education</a>
                    <a href="#skills" className="navbar-link hover:text-blue-100">Skills</a>
                    <a href="#projects" className="navbar-link hover:text-blue-100">Projects</a>
                    <a href="#certifications" className="navbar-link hover:text-blue-100">Certifications</a>
                    <a href="#contact" className="navbar-link hover:text-blue-100">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;