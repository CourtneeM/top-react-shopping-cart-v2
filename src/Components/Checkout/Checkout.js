import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import '../../styles/checkout.scss';

const Checkout = (props) => {
  let cartTotal = 0;
  
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />

      <div className="checkout-container">
        <h1>Checkout</h1>

        {
          props.shoppingCart.map((cartProduct) => {
            const { name, price, image } = cartProduct.product
            const count = Number(cartProduct.count);
            const productTotal = (Number(price) * count).toFixed(2);
            cartTotal += Number(productTotal);

            return (
              <div className="product-container">
                <div>
                  <img src={image} alt={name} />
                  <p className="product-name">{name}</p>
                </div>
                <div>
                  <p>Quantity: {count}</p>
                  <p>Total Price: ${productTotal}</p>
                </div>
              </div>
            )
          })
        }

        <div className="cart-total-container">
          <p>Cart Total: ${cartTotal}</p>
          <Link to="/purchase-complete" className="default-link">
            <button onClick={props.clearCart}>Buy Now</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Checkout;