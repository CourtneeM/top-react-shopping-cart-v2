import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './Components/Shop';
import CartPage from './Components/Checkout/CartPage';
import ProductPage from './Components/Product/ProductPage';
import Checkout from './Components/Checkout/Checkout';
import PurchaseComplete from './Components/Checkout/PurchaseComplete';
import productData from './productData';

const RouteSwitch = () => {
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
          setNumCartItems(numCartItems + (newCount - cartProduct.count));
        } else {
          setNumCartItems(numCartItems - (cartProduct.count - newCount));
        }
        
        cartProduct.count = newCount;
        if (cartProduct.count === 0) shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);
      }
    });

    setShoppingCart(shoppingCartCopy);
  }

  const clearCart = () => {
    setShoppingCart([]);
    setNumCartItems(0);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop"
          element={
            <Shop
              numCartItems={numCartItems}
              productData={productData}
              handleAddToCart={handleAddToCart}
            />
          }
        >
          { productData.map((product) => <Route path={product.id} element={<ProductPage product={product} />} />) }
        </Route>
        <Route path="/cart"
          element={
            <CartPage
              shoppingCart={shoppingCart}
              numCartItems={numCartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEditCartCount={handleEditCartCount}
            />}
        />
        <Route path="/checkout" element={<Checkout shoppingCart={shoppingCart} numCartItems={numCartItems} clearCart={clearCart} />} />
        <Route path="/purchase-complete" element={<PurchaseComplete numCartItems={numCartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;