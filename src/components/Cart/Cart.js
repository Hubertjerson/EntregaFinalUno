import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import '../Css/_cart.scss'

export const Cart = () => {

  const [loading, setLoading] = useState(true)
  const { cart, removeItem, clear, totalCart } = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])


  return (
    <div className="cartContainer">
      {loading ? <h2 className='Titulo_Cart'>Loading....</h2>
        :
        <>
          {!cart.length ? <div className="emptyCart">
            <h2 className='Titulo_Cart'>No hay items en el carrito</h2>
            <Link to='/' className='Link_Cart'>Ir al Shop</Link>
          </div>
            :

            <>
              <h2 className='Titulo_Cart'>Tu compra</h2>
              {cart.map(itemCart => (
                <CartItem key={itemCart.item.id} item={itemCart} remove={removeItem} />
              ))}

              <div className="totalCart">
                <p>Total compra: ${totalCart().toFixed(2)}</p>
              </div>

              <div className="cartButtons">
                <button onClick={() => clear()}>Vaciar carrito</button>
                <button>
                  <Link to={'/checkout'} className='text-decoration-none text-white'>Finalizar compra</Link>
                </button>
              </div>
            </>
          }
        </>
      }


    </div>
  )


}