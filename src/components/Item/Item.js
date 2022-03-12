import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../Css/_Item.css';

export const Item = ( {id, nombre, precio, img} ) => {


    return (
        <div className='Container'>
            <img class="Imagen" src={img} />
            <div class="Info">
                <h5 class="Info">{nombre}</h5>
                <p class="Info">Precio: ${precio}</p>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más</Button>
                </Link>
            </div>
        </div>
    )
}