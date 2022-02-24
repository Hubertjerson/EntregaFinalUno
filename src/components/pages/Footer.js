import { Facebook, Instagram, StorefrontOutlined, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/_Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer__info">
          <div className="footer__datos">
            <h3>StylosMikasa</h3>
            <p><i> <StorefrontOutlined/> </i>Urb. EL GOLF Local 3 - N°65</p>
            <p><i> <WhatsApp/> </i>+51 9291-455-8749</p>
          </div>

          <div className="footer__media">
            <Link to=''><i> <Facebook/> </i></Link>
            <Link to=''><i> <Instagram/> </i></Link>
            <Link to=''><i> <Twitter/> </i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer