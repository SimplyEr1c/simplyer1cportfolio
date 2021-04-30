import React from 'react';
import er1mg from "../assets/Eric.png"

function Me(params) {
  return (
    <div className=" my-5 text-center">
      <img src={er1mg} height="250" alt="Er1c" className="d-block mx-auto mb-4 animate__animated animate__fadeInDown" />
      <div className=" animate__animated animate__fadeInUp animate__delay-1s ">
        <h3 className="display-3 fw-bold">Eric T.</h3>
        <h6>AKA's SimplyEr1c</h6>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Diseñador gráfico / Illustrador</p>
        </div>
      </div>

    </div>
  )
}

export default Me