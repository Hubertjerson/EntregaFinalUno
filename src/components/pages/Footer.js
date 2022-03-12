import React from 'react';
import '../Css/_Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 className='text-uppercase text-center list-unstyled'>STYLOSMIKASA</h1>
            <h1 className="text-center">
              <h3>342-420-6969</h3>
              <h3>LIMA-PERU</h3>
              <h3>123 VILLA PLAZA</h3>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h1 className='text-uppercase text-center'>Redes Sociales</h1>
            <ui className="text-center">
              <h3><AiOutlineInstagram />Instagram</h3>
              <h3><FaFacebookF />Facebook</h3>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className='text-center'>NUESTRO HORARIO DE ATENCION</h4>
            <ui className="text-justify">
              <h3>Atención de Lunes a Viernes de 8:00
              a 17:00hs y Sábados de 9:00 a 14:00hs.</h3>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} DESING | BY | JERSON HUAMAN
          </p>
        </div>
      </div>
    </div>
  )
}
