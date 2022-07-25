import shoppingCartIcon from '../images/cart-outline-dark.png';

const CartNav = (props) => {
  return (
    <div id="cart-nav-container">
      <img src={shoppingCartIcon} alt="shopping cart" />
      <p className="num-cart-items">{props.numCartItems}</p>
    </div>
  );
};

export default CartNav;