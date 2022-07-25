import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Checkout = (props) => {
  let cartTotal = 0;
  
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />
      <h1>Checkout</h1>

      {
        props.shoppingCart.map((cartProduct) => {
          const { name, price, image } = cartProduct.product
          const count = Number(cartProduct.count);
          const productTotal = (Number(price) * count).toFixed(2);
          cartTotal += Number(productTotal);

          return (
            <div>
              <img src={image} alt={name} />
              <p>{name}</p>
              <p>Quantity: {count}</p>
              <p>Total Price: ${productTotal}</p>
            </div>
          )
        })
      }

      <div>
        <p>Cart Total: ${cartTotal}</p>
        <Link to="/purchase-complete">
          <button onClick={props.clearCart}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;