import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../Css/_Item.css';

export const Item = ( {id, nombre, precio, img, desc, oferta} ) => {

    const precioFinal = oferta ? precio * 0.85 : precio

    return (
        <div className='Container'>
            <img class="Imagen" src={img} />
            <div class="Info">
                <h5 class="Info">{nombre}</h5>
                <p class="Info"> {desc}</p>
                { oferta &&
                    <>
                        <Card.Title>15% OFF</Card.Title>
                        <Card.Text>Free shipping</Card.Text>
                    </>
                }
                <p class="Info">
                    Precio: ${precioFinal}
                </p>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más</Button>
                </Link>
            </div>
        </div>
    )
}