import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount';
import '../Item/ItemDetail.css'

const ItemDetail = ({ item, onAdd, goCart }) => {

    return (
        <>
            <div className='Container text-decoration-none'>
                <div className='Wrapper'>
                    <div className='ImgContainer'>
                        <img src={item.img} alt={item.name} className='Image' />
                    </div>
                    <div className='InfoContainer'>
                        <h1 className='Title'>{item.name}</h1>
                        <p className='Desc'>{item.description}</p>
                        <h3 className='Price'>${item.price}</h3>
                        <div className='mt-5'>
                            {goCart ? (
                                <Link to={'/cart'}>
                                    <button className='btn-agregar'>Terminar Compra</button>
                                </Link>
                            ) : (
                                <ItemCount item={item} onAdd={onAdd} />
                            )}
                            <Link className='Button' to="/">Voler al home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
