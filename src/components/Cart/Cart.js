
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import '../Css/_cart.scss'
import '../Css/_cartItem.scss'


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    // render si el cart está vacío
    if (cart.length === 0) {
        return <div className="cartContainer">
            <div className="emptyCart">
                <h2 className='Titulo_Cart'>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    }


    return (
        <>
            <div className="cartContainer">
                <h2 >Tu compra</h2>
                <hr />

                {
                    cart.map((item) => (
                        <div className="cartItem" key={item.id}>
                            <div className="cartItemInfo">
                                <img src={item.img} alt={item.title} className='Image' />
                                <div>
                                    <h4 className="cartItemTitle">{item.nombre}</h4>
                                    <p className="cartItemQuantity">Cantidad: {item.cantidad}</p>
                                </div>
                            </div>
                            <p className="cartItemPrice">Precio: ${item.cantidad * item.precio}</p>
                            <button className="cartItemDelete" onClick={() => eliminarItem(item.id)}>
                                <BsFillTrashFill />
                            </button>
                        </div>
                    ))
                }

                <hr />
                <h2 className="totalCart">Total: ${totalCart()}</h2>

                <div className="cartButtons">
                    <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                </div>
            </div>

        </>
    )
}