import { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../Css/_CartWidget.css'



export const CartWidget = () => {

    const { cantidadCart, cart } = useContext(CartContext)

    return (
        <div>
            <Link to="/cart" className={` ${cart.length === 0 }`}>
                <BsFillCartFill className='carrito'/>
                <span className='unidades'>{cantidadCart()}</span>
            </Link>
        </div>

    )
}