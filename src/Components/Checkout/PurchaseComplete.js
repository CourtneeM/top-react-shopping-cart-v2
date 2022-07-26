import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import '../../styles/purchase-complete.scss';

const PurchaseComplete = (props) => {
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />

      <div className="purchase-complete-container">
        <h1>Thank you for your purchase!</h1>
        <Link to="/shop" className="default-link">
          <button>Click here to return to the store.</button>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseComplete;