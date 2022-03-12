import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { generarOrden } from "../firebase/generarOrden"
import { ThankYou } from "./ThankYou"
import { validar } from "./validar"
import '../Css/_checkout.css'

export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validar(values) && generarOrden(values, cart, totalCart, setOrderId, vaciarCart)
    }


    if (orderId) {
        return <ThankYou order={orderId}/>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="checkoutContainer">
            <h2>Checkout</h2>
            <hr/>

            <div className="buyerData">
                <h2>Datos Personales</h2>
            </div>
            <form onSubmit={handleSubmit} className="buyer-form">
                <legend> Completa Tus datos para completar la compra</legend>
                <input
                    className="buyer-input"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="buyer-input"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="buyer-input"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="dataButtons">
                    Enviar
                </button>
            </form>
        </div>
    )
}
