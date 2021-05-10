import React from 'react';
import logoDark from '../assets/LogoDark.svg';
import logo from '../assets/Logo.svg';


function Navbar() {
    return (
        <nav className="bg-white h-16 flex items-center shadow-md">
            <div className="container px-5 mx-auto sm:w-4/6">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src={logo} className=" block w-8" alt="Logo" />
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar