import Navbar from './Navbar';
import ProductCard from './ProductCard';
import productData from '../productData';
import uniqid from 'uniqid';

const Shop = (props) => {
  return (
    <div>
      <Navbar storeName={props.storeName} />
      <h1>Shop</h1>

      {productData.map((product) => <ProductCard key={uniqid()} {...product} />)}
    </div>
  )
}

export default Shop;