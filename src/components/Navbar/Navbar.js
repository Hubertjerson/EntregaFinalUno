import { Link } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';
import '../Navbar/NavBar.css';


const Navbar = () => {
    return (
        <header className="header">
            <Link to='/' style={{ color: 'black' }} className='text-decoration-none'>
                <h1>StylosMikasa</h1>
            </Link>


            <nav className="header-nav">
                <Link to='/category/hombre' className='header-link'>Hombre</Link>
                <Link to='/category/mujer' className='header-link'>Mujer</Link>
                <CartWidget />
            </nav>

        </header>
    );
};

export default Navbar;
