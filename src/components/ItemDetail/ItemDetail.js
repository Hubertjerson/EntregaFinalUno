import '../Css/_ItemDetail.css';
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'
import { ItemCount } from "../ItemCount/ItemCount"



export const ItemDetail = ({ id, nombre, img, desc, precio, stock, categoria }) => {

    const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }

            agregarAlCarrito(addItem)
        }
    }

    return (
        <div className='container mt-4 mb-4'>
            <div className='row d-flex flex-row justify-content-center align-content-center'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={img} alt={nombre} className='img-detail img-fluid max-width: 100%;' />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-start container-detail'>
                    <h3 className='Title'>{nombre}</h3>
                    <p className='descripcion'>{desc}</p>
                    <h5 className='pricee'>Precio: ${precio}</h5>
                    <div className='mt-5'>
                        {
                            isInCart(id)
                                ? <Link to="/cart" className="boton-terminar btnItDet">
                                    Terminar mi compra
                                </Link>
                                :
                                <>
                                    <ItemCount
                                        max={stock}
                                        counter={cantidad}
                                        setCounter={setCantidad}
                                    />

                                    <button
                                        className="btn btn-success my-2"
                                        onClick={handleAgregar}
                                        disabled={cantidad === 0}
                                    >
                                        Agregar al carrito
                                    </button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
