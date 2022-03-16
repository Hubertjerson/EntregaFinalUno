import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../Css/_CartWidget.css'



export const CartWidget = () => {

    const { cantidadCart, cart } = useContext(CartContext)

    return (
        <div className="carrito">
            <Link to="/cart" className={` ${cart.length === 0 }`}>
                < AiOutlineShoppingCart className='carrito'/>
                <span className='unidades'>{cantidadCart()}</span>
            </Link>
        </div>

    )
}