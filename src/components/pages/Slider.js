import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/invierno.jpg';
import image2 from '../assets/otoño.jpg';
import image3 from '../assets/page.jpg';


export const Slider = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-black'>ROPA DE MUJERES Y HOMBRES</h3>
                    <p className='text-black'>ENCUENTRA VARIEDADES DE ROPA URBANA PARA HOMBRE Y MUJER.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 >CIERRE DE PUERTAS</h3>
                    <p>APROVECHA EL CIERRA PUERTAS EN VARIEDAD DE ROPA DE INVIERNO.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>VARIEDAD EN ZAPATILLAS</h3>
                    <p>ZAPATILLAS SKATERS Y MAS.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

