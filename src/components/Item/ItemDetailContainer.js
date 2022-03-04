import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { traerProductos } from './items';
import { Loader } from '../pages/Loader';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        traerProductos
            .then((res) => {
                const unicoProd = res.find((i) => i.id === parseInt(id));
                setItem(unicoProd);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


    return <>{loading ? <Loader/> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
