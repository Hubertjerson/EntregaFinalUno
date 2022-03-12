import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { CartWidget } from '../CartWidget/CartWidget'
import '../Css/_NavBar.css';

export const NavBar = () => {


    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className="navbar">
            <div className="nav-container-logo">
                <Link to="/" className='text-decoration-none text-black'>
                    <h1>StylosMikasa</h1>
                </Link>
            </div>
            <div>
                <ul
                    className={
                        click ? 'nav-container-menu actived' : 'nav-container-menu'
                    }
                >
                    <li className="nav-item">
                        <Link to='/productos/hombre' activeClassName="selected" className="nav-links" onClick={handleClick}>Remeras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/productos/mujer' activeClassName="selected" className="nav-links" onClick={handleClick}>Zapatos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/productos/zapatillas' activeClassName="selected" className="nav-links" onClick={handleClick}>Gorros</Link>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    );
}
