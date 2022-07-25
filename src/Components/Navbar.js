import { Link } from 'react-router-dom';
import CartNav from './CartNav';

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.storeName}</h1>
      <Link to="/cart">
        <CartNav numCartItems={props.numCartItems} />
      </Link>
    </div>
  );
};

export default Navbar;