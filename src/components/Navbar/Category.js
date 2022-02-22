import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <button className='btn btn-outline-dark me-2' ><Link className='text-decoration-none' to="/">All</Link></button>
            <button className='btn btn-outline-dark me-2' ><Link className='text-decoration-none' to="/category/hombre">Hombre</Link></button>
            <button className='btn btn-outline-dark me-2' ><Link className='text-decoration-none' to="/category/accesorio">accesorio</Link></button>
            <button className='btn btn-outline-dark me-2' ><Link className='text-decoration-none' to="/category/electronics">Electronica</Link></button>
            <button className='btn btn-outline-dark me-2' ><Link className='text-decoration-none' to="/category/mujer">Mujer</Link></button>
        </div>
    )
}

export default Category