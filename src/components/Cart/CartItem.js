import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Css/_cartItem.scss'

export const CartItem = ({item, remove}) => {

    return (
        <div className="cartItem" key={item.item.id}>
            <div className="cartItemInfo">
                <img src={item.item.img} alt={item.item.title} className='Image'/>
                <div>
                    <p className="cartItemTitle">{item.item.title}</p>
                    <p className="cartItemQuantity">Cantidad: {item.quantity}</p>
                </div>
            </div>
            <p className="cartItemPrice">Precio: ${(item.item.price * item.quantity).toFixed(2)}</p>
            <button onClick={()=> remove(item.item.id)}><FontAwesomeIcon icon={faTrash} className="cartItemDelete"></FontAwesomeIcon></button>
        </div>
    )
}