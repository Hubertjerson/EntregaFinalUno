import React, { useState } from 'react'
import '../Item/ItemCount.css';

const ItemCount = ({item, onAdd}) => {

    const [counter, setCounter] = useState(0)

    const Incrementar = () => {

        setCounter(counter + 1)
    }

    const Disminuir = () => {

            setCounter(counter - 1)

    }

    return (
        <div className="container-buton">
            <div className="container-add-substract">
                <button className='container-add-substract' onClick={Incrementar} disabled={counter === item.stock && true}
                style={counter === item.stock ? {cursor:`not-allowed`}:{cursor:`pointer`}}>+</button>
                <div>{counter}</div>
                <button className='container-add-substract' onClick={Disminuir} disabled={counter === 0 && true}
                style={counter === 0 ? {cursor:`not-allowed`} :{cursor:`pointer`}}>-</button>
            </div>
            <div>
                <button onClick={()=> onAdd(counter)} disabled={counter === 0} className="btn-agregar"
                style={counter === 0 ? {cursor: `not-allowed`} : {cursor:`pointer`}}>Agregar al carrito</button>
            </div>
            {counter ===item.stock && (
                <h6 className="aviso-stock">Stock maximo</h6>
            )}
        </div>
    )
}

export default ItemCount