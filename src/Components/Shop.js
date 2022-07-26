import Navbar from './Navbar/Navbar';
import ProductCard from './Product/ProductCard';
import productData from '../productData';
import uniqid from 'uniqid';
import '../styles/shop.scss';

const Shop = (props) => {
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />

      <div className="shop-container">
        <h1>Shop</h1>

        {productData.map((product) => {
          return <ProductCard key={uniqid()} product={product} handleAddToCart={props.handleAddToCart} />
        })}
      </div>
    </div>
  )
}

export default Shop;