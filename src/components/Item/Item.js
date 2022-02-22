import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter';
import '../Item/Item.css';

const Item = ({ img, name, price, id }) => {
    return (
        <div className='Container'>
            <Link to={`/item/${id}`}>
                <img class="Imagen" src={img} alt={name} />
                <div class="Info">
                    <h5 class="Info">{name.substring(0, 12)}</h5>
                    <p class="Info">$ {price}</p>
                    <Counter />
                </div>
            </Link>
        </div >
    )
};

export default Item;
