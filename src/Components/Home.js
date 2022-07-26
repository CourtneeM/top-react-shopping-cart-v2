import { Link } from 'react-router-dom';
import '../styles/home.scss';

const Home = () => {

  return (
    <div className="home-container">
      <h1>Welcome to <span>Bargain Shop</span></h1>
      <Link to="/shop" className="default-link">
        <p>Check out our wares</p>
      </Link>
    </div>
  );
};

export default Home;