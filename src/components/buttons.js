import React from 'react';
import { faArtstation, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buttons() {
    return (

        <div className=" flex justify-center text-center gap-6 ">

            <a href="https://simplyer1c.artstation.com" target='_blank' className="border-white border-8 p-5 rounded-3xl hover:bg-purple-300 font-bold shadow-lg">
                <FontAwesomeIcon icon={faArtstation} size="4x" />
                <p>3D Art</p>
            </a>
            <a href="https://www.instagram.com/simplyer1c_art/" target='_blank' className="border-white border-8 p-5 rounded-3xl hover:bg-purple-300 font-bold shadow-lg">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
                <p>Brands, 2D/3D</p>
            </a>
            
        </div>
    )
}

export default Buttons