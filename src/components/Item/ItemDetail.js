import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/ItemDetail.css'

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className='Container'>
                <div className='Wrapper'>
                    <div className='ImgContainer'>
                    <img src={item.img} alt={item.name} className='Image' />
                    </div>
                    <div className='InfoContainer'>
                        <h1 className='Title'>{item.name}</h1>
                        <p className='Desc'>{item.description}</p>
                        <h3 className='Price'>${item.price}</h3>
                        <Link className='Button' to="/">Voler al home</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
