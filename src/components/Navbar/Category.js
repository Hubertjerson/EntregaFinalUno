import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/_Category.css';

const Category = () => {
    return (
        <div className='d-flex justify-content-center mb-5 pb-5'>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/verano">Verano</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/invierno">Invierno</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/otoño">Otoño</Link></button>
            <button className='button me-5'><Link className='text-decoration-none' to="/category/primavera">Primavera</Link></button>
        </div>
    )
}

export default Category