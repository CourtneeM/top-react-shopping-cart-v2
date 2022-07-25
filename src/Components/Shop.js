import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import productData from '../productData';
import uniqid from 'uniqid';

const Shop = (props) => {
  let [shoppingCart, setShoppingCart] = useState([]);
  let [numCartItems, setNumCartItems] = useState(0);

  const handleAddToCart = (product, count) => {
    let shoppingCartCopy = [...shoppingCart];
    let productInCart = false;
    
    shoppingCartCopy.forEach((cartProduct) => {
      if (cartProduct.product.id === product.id) {
        productInCart = true;
        cartProduct.count += count
      }
    });
    
    if (!productInCart) shoppingCartCopy.push({product, count});
    if (shoppingCartCopy.length === 0) shoppingCartCopy.push({product, count});

    setShoppingCart(shoppingCartCopy);
    setNumCartItems(numCartItems += count);
  }

  return (
    <div>
      <Navbar storeName={props.storeName} numCartItems={numCartItems} />
      <h1>Shop</h1>

      {productData.map((product) => {
        return <ProductCard key={uniqid()} product={product} handleAddToCart={handleAddToCart} />
      })}
    </div>
  )
}

export default Shop;