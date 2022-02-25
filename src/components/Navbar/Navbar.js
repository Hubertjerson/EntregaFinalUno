import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import CartWidget from '../Cart/CartWidget';
import '../Css/_NavBar.css';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className="navbar">
            <div className="nav-container-logo">
                <NavLink to="/" className='text-decoration-none text-black'>
                    <h1>StylosMikasa</h1>
                </NavLink>
            </div>
            <div>
                <ul
                    className={
                        click ? 'nav-container-menu actived' : 'nav-container-menu'
                    }
                >
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="selected"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/category/hombre"
                            activeClassName="selected"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Hombre
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/category/mujer"
                            activeClassName="selected"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Mujer
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/category/accesorio"
                            activeClassName="selected"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Accesorio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/category/zapatilla"
                            activeClassName="selected"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Zapatillas
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
