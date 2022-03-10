import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/_Item.css';

const Item = ({ img, name, price, id }) => {
    return (
        <div className='Container'>
            <Link to={`/item/${id}`} className="text-decoration-none">
                <img class="Imagen" src={img} alt={name} />
                <div class="Info">
                    <h5 class="Info">{name}</h5>
                    <p class="Info">$ {price}</p>
                </div>
            </Link>
        </div >
    )
};

export default Item;
