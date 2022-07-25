import CartNav from './CartNav';

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.storeName}</h1>
      <CartNav />
    </div>
  );
};

export default Navbar;