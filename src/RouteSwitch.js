import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './Components/Shop';
import CartPage from './Components/CartPage';
import ProductPage from './Components/ProductPage';
import productData from './productData';

const RouteSwitch = () => {
  let [shoppingCart, setShoppingCart] = useState([]);
  let [numCartItems, setNumCartItems] = useState(0);
  
  const storeName = 'Bargain Shop';

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

  const handleRemoveFromCart = ({product, count}) => {
    let shoppingCartCopy = [...shoppingCart];

    shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);

    setShoppingCart(shoppingCartCopy);
    setNumCartItems(numCartItems - count);
  }

  const handleEditCartCount = (product, newCount) => {
    let shoppingCartCopy = [...shoppingCart];

    shoppingCartCopy.forEach((cartProduct) => {
      if (cartProduct.product.id === product.id) {
        if (newCount > cartProduct.count) {
          setNumCartItems(numCartItems + 1);
        } else {
          setNumCartItems(numCartItems - 1);
        }
        
        cartProduct.count = newCount;
        if (cartProduct.count === 0) shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);
      }
    });

    setShoppingCart(shoppingCartCopy);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App storeName={storeName} />} />
        <Route path="/shop"
          element={
            <Shop
              storeName={storeName}
              numCartItems={numCartItems}
              handleAddToCart={handleAddToCart}
            />
          }
        >
          { productData.map((product) => <Route path={product.id} element={<ProductPage product={product} />} />) }
        </Route>
        <Route path="/cart" element={<CartPage shoppingCart={shoppingCart} numCartItems={numCartItems} handleRemoveFromCart={handleRemoveFromCart} handleEditCartCount={handleEditCartCount} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;