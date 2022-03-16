import React from 'react';
import '../Css/_Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="container-fluid fondo-footer">
      <div className="row">
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-2">
          <div className="redes">
            <AiOutlineInstagram />
          </div>
          <div className="redes">
            <FaFacebookF />
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-4">
          <div className="info">
            <h6 className="text-center">
              TRUJILLO - ATAHUALPA 231 - Atención de Lunes a Viernes de 8:00
              a 17:00hs y Sábados de 9:00 a 14:00hs.
            </h6>
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-4 copy">
          <div className="">
            <h6 className="text-center jer mt-2 mb-2">
              Jerson Huaman
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
