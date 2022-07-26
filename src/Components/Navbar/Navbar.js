import { Link } from 'react-router-dom';
import CartNav from './CartNav';
import '../../styles/navbar.scss';

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <Link to="/shop" className="default-link">
        <h1>Bargain Shop</h1>
      </Link>
      <Link to="/cart" className="default-link">
        <CartNav numCartItems={props.numCartItems} />
      </Link>
    </div>
  );
};

export default Navbar;