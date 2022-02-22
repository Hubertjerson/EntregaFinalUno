import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from './items';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                const categorias = res.filter((i) => i.category === `${id}`);
                id === undefined ? setItems(res) : setItems(categorias);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className='container my-5 py-5 text-decoration-none'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest products</h1>
                </div>
            </div>
            <div className='row justify-content-center text-decoration-none'>
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;
