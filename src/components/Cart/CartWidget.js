import React from 'react'
import { Badge } from '@material-ui/core';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../Css/_CartWidget.css';

const CartWidget = () => {
    return (
        <div className="carrito">
            <AiOutlineShoppingCart />
        </div>
    )
}

export default CartWidget