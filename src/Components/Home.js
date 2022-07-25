import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div>
      <h1>Welcome to {props.storeName}</h1>
      <Link to="/shop">Check out our wares</Link>
    </div>
  );
};

export default Home;