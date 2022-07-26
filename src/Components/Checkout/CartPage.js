import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import uniqid from 'uniqid';
import '../../styles/cart.scss';

const CartPage = (props) => {
  let cartTotal = 0;

  const handleOnChange = (value, cartProduct) => {
    if (Number(value) != value) return;
    props.handleEditCartCount(cartProduct.product, Number(value))
  }

  const displayCart = () => {
    return (
      <>
        {
          props.shoppingCart.map((cartProduct) => {
            const { name, price, image } = cartProduct.product;
            const count = Number(cartProduct.count);
            let productTotal = (Number(price) * count).toFixed(2);
            cartTotal += Number(productTotal);

            return (
              <div className="product-container" key={uniqid()}>
                <div className="product-info">
                  <img src={image} alt={name} />
                  <div>
                    <p className="product-name">{name}</p>
                    <p>Each: ${price}</p>
                    <p>Total Price: ${productTotal}</p>
                  </div>
                </div>
                <div className="quantity-btns">
                  <button className="decrement-btn" onClick={() => props.handleEditCartCount(cartProduct.product, count - 1)}>-</button>
                  <input className="quantity-input" type="text" value={count} onChange={(e) => handleOnChange(e.target.value, cartProduct)} />
                  <button className="increment-btn" onClick={() => props.handleEditCartCount(cartProduct.product, count + 1)}>+</button>
                  <button className="remove-btn" onClick={() => props.handleRemoveFromCart(cartProduct)}>Remove from cart</button>
                </div>
              </div>
            )
          })
        }
        <div className="cart-total-container">
          <p>Total Products: {props.numCartItems}</p>
          <p>Cart Total: ${cartTotal}</p>
          <Link to="/checkout" className="default-link">
            <button>Checkout</button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />
      
      <div className="shopping-cart-container">
        <h1>Shopping Cart</h1>

        { props.numCartItems ? displayCart() : <p className="empty-cart-message">Your cart is currently empty!</p> }
      </div>
    </div>
  )
}

export default CartPage;