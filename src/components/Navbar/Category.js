import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/_Category.css';

const Category = () => {
    return (
        <div className='d-flex justify-content-center mb-5 pb-5'>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/hombre">Hombre</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/mujer">Mujer</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/accesorio">Accesorio</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/electronics">Electronica</Link></button>
        </div>
    )
}

export default Category