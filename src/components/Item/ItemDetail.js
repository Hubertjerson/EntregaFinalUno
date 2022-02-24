import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount';
import '../Item/ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0)
    const addHandler = (cantidad)=> {
        setCount(cantidad)
    };


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
                            {count === 0 ?
                                <ItemCount stock={item.stock} onAdd={addHandler} />
                                :
                                <Link to="/cart">
                                    <button className="boton-terminar">Terminar mi compra</button>
                                </Link>
                            }
                                            <Link to={`/category/${item.category}`} className="button">Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
