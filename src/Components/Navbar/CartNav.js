import shoppingCartIcon from '../../images/cart-outline-light.png';

const CartNav = (props) => {
  return (
    <div className="cart-nav-container">
      <img src={shoppingCartIcon} alt="shopping cart" />
      <p className="num-cart-items">{props.numCartItems}</p>
    </div>
  );
};

export default CartNav;