import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
//import { traerProductos } from './items';
import { Loader } from '../pages/Loader';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase/firebase';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();

//    useEffect(() => {
//        setLoading(true);
//        traerProductos
//            .then((res) => {
//                const unicoProd = res.find((i) => i.id === parseInt(id));
//                setItem(unicoProd);
//                setLoading(false);
//            })
//            .catch((error) => {
//                console.error(error);
//            });
//    }, [id]);


const getSelect = async () => {
    try{
        const document = doc(db,"items",id)
        const response = await getDoc(document)
        const result = {id :response.id, ...response.data()}
        setItem (result)
        setLoading(false)

    } catch(error){
        console.warn("error",error)
    }
}

useEffect(() =>{
    getSelect()
},[id])





    return <>{loading ? <Loader/> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
