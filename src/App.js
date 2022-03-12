import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Slider} from './components/pages/Slider';
import { Error404 } from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './components/context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/CheCkout/Checkout";
import {Footer} from "./components/pages/Footer";

function App() {


    return (

        <CartProvider>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Slider />} />
                    <Route path='/productos/:catId' element={<ItemListContainer />} />
                    <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>

                { <Footer/> }
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;