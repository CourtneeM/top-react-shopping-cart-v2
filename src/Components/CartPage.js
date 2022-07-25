import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import uniqid from 'uniqid';

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
              <div key={uniqid()}>
                <div>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                  <p>Each: ${price}</p>
                  <p>Total Price: ${productTotal}</p>
                </div>
                <div>
                  <button onClick={() => props.handleEditCartCount(cartProduct.product, count - 1)}>-</button>
                  <input type="text" value={count} onChange={(e) => handleOnChange(e.target.value, cartProduct)} />
                  <button onClick={() => props.handleEditCartCount(cartProduct.product, count + 1)}>+</button>
                </div>
                <button onClick={() => props.handleRemoveFromCart(cartProduct)}>Remove from cart</button>
              </div>
            )
          })
        }
        <div className="cart-total-container">
          <p>Total Products: {props.numCartItems}</p>
          <p>Cart Total: ${cartTotal}</p>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />
      <h1>Shopping Cart</h1>

      { props.numCartItems ? displayCart() : <p>Your cart is currently empty!</p> }
    </div>
  )
}

export default CartPage;