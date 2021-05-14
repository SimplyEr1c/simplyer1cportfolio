import React from 'react';
import er1mg from "../assets/Eric2.jpg"


function Me(params) {
  return (
    <div>
      <div className="container w-3/4 m-auto">
        <div className="flex flex-col text-center items-center">

          <div className="items-center">
            <img src={er1mg} height="250" width="250" alt="Er1c" className="inline shadow-lg rounded-full border-white border-8" />
          </div>

          <div className="flex flex-col justify-center ">
            <h3 className="inline-block text-4xl sm:text-6xl font-bold italic mt-5 rounded-xl m-2">Eric T.</h3>
            <p className="inline-block text-base sm:text-2xl italic">Diseñador gráfico / Illustrador</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Me;