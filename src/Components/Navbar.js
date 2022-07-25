import { Link } from 'react-router-dom';
import CartNav from './CartNav';

const Navbar = (props) => {
  return (
    <div>
      <Link to="/shop">
        <h1>Bargain Shop</h1>
      </Link>
      <Link to="/cart">
        <CartNav numCartItems={props.numCartItems} />
      </Link>
    </div>
  );
};

export default Navbar;