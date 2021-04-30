import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArtstation,
    faInstagram,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";

function Buttons() {
    return (
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a href="https://simplyer1c.artstation.com" type="button" class="btn btn-lg px-3 mx-sm-3">
                <FontAwesomeIcon icon={faArtstation} size="2x" color="black" />
                <div>3D Art</div>
            </a>
            <a href="https://www.instagram.com/simplyer1c_art/" type="button" class="btn  btn-lg px-3 mx-sm-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
                <div>Brands, 2D/3D</div>
            </a>
            <button href="" type="button" disabled class="btn  btn-lg px-3 mx-sm-3">
                <FontAwesomeIcon icon={faBehance} size="2x" color="black" />
                <div>Soon.</div>
            </button>
        </div>
    )
}

export default Buttons