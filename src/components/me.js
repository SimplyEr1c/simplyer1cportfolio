import React from 'react';
import Buttons from './buttons'
import er1mg from "../assets/Eric.png"

function Me(params) {
  return (
    <div>
      <div className="container w-3/4 m-auto h-auto">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 text-center items-center">

          <div className="items-center py-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <img src={er1mg} height="250" width="250" alt="Er1c" className="inline shadow-lg rounded-full " />
            <div className="mt-5">
              <a href="https://t.me/SimplyEr1c"> Telegram</a>
              <a href="mailto:EricJTA@tuta.io"> Mail</a>
            </div>
          </div>

          <div className="flex flex-col justify-center py-8 h-full rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="inline-block text-4xl sm:text-6xl font-bold italic mt-5 rounded-xl m-2">Eric T.</h3>
            <p className="inline-block text-base sm:text-lg italic">Diseñador gráfico / Illustrador</p>
          </div>

        </div>
      </div>
      <Buttons />
    </div>

  )
}

export default Me;