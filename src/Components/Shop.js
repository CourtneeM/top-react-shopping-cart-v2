import Navbar from './Navbar';
import ProductCard from './ProductCard';
import productData from '../productData';
import uniqid from 'uniqid';

const Shop = (props) => {
  return (
    <div>
      <Navbar storeName={props.storeName} numCartItems={props.numCartItems} />
      <h1>Shop</h1>

      {productData.map((product) => {
        return <ProductCard key={uniqid()} product={product} handleAddToCart={props.handleAddToCart} />
      })}
    </div>
  )
}

export default Shop;