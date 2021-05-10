import React from 'react';
import Buttons from './buttons'

import er1mg from "../assets/Eric.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Button from './button';


function Me(params) {
  return (
    <div className="container w-1/2 m-auto h-auto">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 text-center items-center">

        <div className="items-center py-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg">
          <img src={er1mg} height="250" alt="Er1c" className="inline shadow-lg rounded-full " />
          <div className="mt-5">
            <a href="https://t.me/SimplyEr1c"> <FontAwesomeIcon icon={faTelegram} size="2x" className="mx-2 hover:text-blue-400 " /></a>
            <a href="mailto:EricJTA@tuta.io"> <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-2" /></a>
          </div>ZZ
        </div>

        <div className="items-center py-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg">
          <h3 className="inline-block text-4xl sm:text-6xl font-bold italic mt-5 rounded-xl m-2">Eric T.</h3>
          <p className="inline-block text-base sm:text-lg italic">Diseñador gráfico / Illustrador</p>
        </div>

      </div>

      <Button />
    </div>
  )
}

export default Me;