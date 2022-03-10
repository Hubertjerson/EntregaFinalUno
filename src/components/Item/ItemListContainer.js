import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Loader } from '../pages/Loader';
//import { products } from './items';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/firebase'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(true)
    const {Id } = useParams();

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result)
            setLoad(false)

        } catch (error) {
            console.warn("error", error)
        }
    }

    const getDataCategory = async () => {
        try {
            const q = query(collection(db, "items"), where ("category","==", Id))
            const querySnapshot = await getDocs(q)
            setItems( querySnapshot.docs.map((doc) => doc = { id: doc.id, ...doc.data() }))
            setLoad(false)

        } catch (error) {
            console.warn("error", error)
        }
    }

    useEffect(() => {
        Id ? getDataCategory() : getData()
    }, [Id])

    console.log("items:", items)

    return (
        <div className='container my-5 py-5 text-decoration-none'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Ropa Por Temporada</h1>
                </div>
            </div>
            <div className='row justify-content-center text-decoration-none'>
                {load ? <Loader /> : <ItemList items={items} />}
            </div>
        </div>
    );
};

export default ItemListContainer;





//    useEffect(() => {
//        const traerProductos = new Promise((resolve, reject) => {
//            setTimeout(() => {
//                resolve(products);
//            }, 2000);
//        });
//        traerProductos
//            .then((res) => {
//                const categorias = res.filter((i) => i.category === `${id}`);
//                id === undefined ? setItems(res) : setItems(categorias);
//            })
//            .catch((error) => {
//                console.error(error);
//            });
//    }, [id]);