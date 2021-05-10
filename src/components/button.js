import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArtstation,
    faInstagram,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";


function Button({title, link, faIcon, description }) {
    return (
            <div className="bg-white dark:bg-gray-900 py-8 rounded-3xl shadow-lg flex items-center text-center">
                <a href="#" className="">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
                <div className="ml-6">
                    <h1 className="text-2xl font-bold italic">Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </a>
            </div>
            
    )
}

export default Button;