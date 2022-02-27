import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Css/_CartWidget.css';
import { Link } from 'react-router-dom'


const CartWidget = () => {
    return (
        <Link to='/cart' >
            <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
    )
}

export default CartWidget