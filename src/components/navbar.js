import React from 'react';
import logo from '../assets/Logo.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark">
            <div className="container">
                <img src={logo} className="navbar-brand" alt="SE" height="64px" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <a className="nav-link" href="https://t.me/SimplyEr1c">
                                <FontAwesomeIcon icon={faTelegram} size="2x" color="black" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:EricJTA@tuta.io">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" color="black" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar