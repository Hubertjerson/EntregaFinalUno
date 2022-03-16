# Proyecto E-Commerce en react de Tienda de ropa Jerson Huaman

Este proyecto simula un ecommerce de una tienda de ropa. Salvo por la sección de bienvenida (Slider), el resto de las páginas es exclusivamente para vista y selección de productos.
![Endavant](public/Video/Video-TIENDA-Gif.gif)

## Navegación

La barra de navegación ofrece links a las distintas categorías de productos. En cualquier selección se renderiza el componente ItemListContainer, que muestra productos distintos según un filtro de la base de datos. Cada producto es un componente Item.

La categoría a filtrar se toma usando useParams().

## Item - ItemDetail

Cada componente Item muestra un detalle del producto y la opción para agregar al carrito. Esto renderiza el componente ItemDetailContainer, que toma el ID del producto correspondiente usando useParams(), y hace un pedido a la base de datos de ese id. Con el resultado renderiza el componente ItemDetail que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock disponible según la base de datos.

## Cart

Cuando haya al menos un producto agregado al carrito se hace visible en el NavComponent el ícono para ir al carrito, que muestra minimizada mente la cantidad de productos agregados y el precio total al hacer hover sobre el ícono. Clickear (o clickear el botón TERMINAR COMPRA en el ItemDetail) redirecciona a /cart, lo que renderiza el componente Cart con el detalle de los productos seleccionados hasta el momento, la posibilidad de eliminar alguno y de continuar con la confirmación de la compra.

## Cart Context

Todos los procesos mencionados anteriormente están atravesados por el contexto CartContext, que reúne la información del carrito, los productos seleccionados, y ofrece métodos para limpiar el carrito, calcular el total y agregar productos.

## Tecnologías y librerías:

- Interfaz realizada con ReactJS - Create React App

- [React Icons](https://react-icons.github.io/react-icons/).\

React Icons importamos en nuestro proyecto cualquier ícono que esta librería nos provee.

- [styled-comoponents](https://styled-components.com/).\

Styled Components es una alternativa de mejorar CSS para diseñar componentes en React..

- [Material icons - MIU](https://mui.com/components/material-icons/).\

Material icons importamos en nuestro proyecto cualquier ícono que esta librería nos provee.

- [React Bootstrap](https://react-bootstrap.github.io/).\

React Bootstrap nos ayuda gracias a sus componentes y sus clases ya creadas a hacer la maquetación del sitio más rápidamente.

- [React-Router-Dom](https://reactrouter.com/web/guides/quick-start).\

Esta librería se encarga de generar rutas dinámicas para así facilitar la navegabilidad por el sitio.

## Hooks Implementados

useState (React).\

Usado para generar estados locales al componente y también guardar esos estados para poder luego modificarlos.

useEffect (React).\

Usado para montar y hacer un render de los componentes solo cuando se los tiene que mostrar.

useContext (React).\

Con useContext logramos crear un contexto para poder tener dentro todos los datos, estados y funciones que queramos pasar a cualquier componente.

useParams y useHistory (React-Router-Dom).\

Con useParams se detecta el parámetro que le indicamos por la URL.

## Descargar y correr el proyecto

1.  Desde la opcion Code copiamos el link HTTPS
2.  En nuestra terminal elegimos un lugar para clonar la carpeta y escribimos "git clone" + link que copiamos anteriormente

```
git clone https://github.com/Hubertjerson/EntregaFinalUno.git
```

3.  Desde la terminal nos paramos en la carpeta raíz del proyecto e instalamos todos las dependencias que están dentro con "npm i"

```
npm i
```

4.  Escribimos en la terminal "npm start" y se abrirá el sitio en el navegador predeterminado.

```
npm start
```

Se abre una pestaña del navegador en el puerto 3000:

#### Sino copiar esta URL y pegarla en el navegador: http://localhost:3000

### End
