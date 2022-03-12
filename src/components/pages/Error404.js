import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/_Error404.css';

export const Error404 = () => {
    return (
        <div id='notFound'>
            <div className='notfound'>
                <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>Lo sentimos, página no encontrada</h2>
                <p className='mb-5'>
                    la página que está buscando podría haber sido eliminada,
                    ha cambiado de nombre o no está disponible temporalmente.
                </p>
                <Link to='/'>Volver al Home</Link>
            </div>
        </div>
    )
}
