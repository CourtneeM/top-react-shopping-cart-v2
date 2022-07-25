import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const PurchaseComplete = (props) => {
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />
      <h1>Thank you for your purchase!</h1>
      <Link to="/shop">
        <p>Click here to return to the store.</p>
      </Link>
    </div>
  );
};

export default PurchaseComplete;