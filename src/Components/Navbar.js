import CartNav from './CartNav';

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.storeName}</h1>
      <CartNav numCartItems={props.numCartItems} />
    </div>
  );
};

export default Navbar;