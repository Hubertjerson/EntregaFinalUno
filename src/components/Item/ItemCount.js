import React, { useState } from 'react';
import '../Css/_ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);

    const sumarCantidad = () => counter + 1 <= stock ? setCounter(counter + 1) : setCounter(counter);
    const restarCantidad = () => counter - 1 >= 1 ? setCounter(counter - 1) : setCounter(1);
    const agregar = () => onAdd(counter);

    return <div className="container-buton">
        <div className='container-add-substract'>
            <button className='container-add-substract' onClick={restarCantidad}>-</button>
            <p>{counter}</p>
            <button className='container-add-substract' onClick={sumarCantidad}>+</button>
        </div>
        <button onClick={agregar} className="boton-agregar button-Count"><span>Agregar al Carrito</span>
            <div class="liquid"></div></button>
    </div>
}

export default ItemCount;