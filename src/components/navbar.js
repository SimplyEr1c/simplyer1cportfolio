import React from 'react';
import logoDark from '../assets/LogoDark.svg';
import logo from '../assets/Logo.svg';


function Navbar() {
    return (
        <nav className=" h-16 flex items-center text-white">
            <div className="container px-5 mx-auto sm:w-4/6">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src={logoDark} className=" block w-8 svg fill-current" alt="Logo"/>
                        <h1>Please Fix the logo</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar