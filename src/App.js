import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import Error404 from './components/pages/Error404';
import Slider from './components/Slider';

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Slider/>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
