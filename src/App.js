import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider} from "react-use-cart";
import Slider from './components/Slider';

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Slider/>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />
                </Routes>y
            </Router>
        </CartProvider>
    );
}

export default App;
