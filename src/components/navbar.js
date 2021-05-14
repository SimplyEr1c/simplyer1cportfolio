import React from 'react';
import logoDark from '../assets/LogoDark.svg';
import logo from '../assets/Logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
    return (
        <nav className=" h-16 flex items-center text-white">

            <div className="container px-5 mx-auto sm:w-4/6">
                <div className="relative flex items-center justify-between h-16">
                    <img src={logoDark} className=" block w-8 svg fill-current" alt="Logo" />
                    
                    <div className="inline-flex items-center gap-3">
                        <a href="https://t.me/SimplyEr1c" target='_blank'> <FontAwesomeIcon icon={faTelegram} size="2x" className="hover:text-blue-200" /> </a>
                        <a href="mailto:EricJTA@tuta.io" target='_blank'> <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:text-blue-200" /> </a>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar