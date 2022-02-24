import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "react-use-cart";
import Error404 from './components/pages/Error404';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
