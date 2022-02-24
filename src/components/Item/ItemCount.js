import React, { useState } from 'react'
import '../Item/ItemCount.css';

const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1);

    const Incrementar = () => counter+1 <= stock ? setCounter(counter + 1) : setCounter(counter);
    const Disminuir = () =>  counter-1 >= 1 ? setCounter(counter - 1) : setCounter(1);
    const Agregar = ()=> onAdd(counter);


    return (
        <div className="container-buton">
            <div className="container-add-substract">
                <button className='container-add-substract' onClick={Incrementar} >+</button>
                <div>{counter}</div>
                <button className='container-add-substract' onClick={Disminuir}>-</button>
            </div>
            <div>
                <button onClick={Agregar} className="boton-agregar">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount