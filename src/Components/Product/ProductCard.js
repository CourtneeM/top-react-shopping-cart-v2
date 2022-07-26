import React, { useState } from 'react';

const ProductCard = (props) => {
  const { name, price, image } = props.product;
  
  let [count, setCount] = useState(0);

  const decrementCount = () => count <= 0 ? null : setCount(count -= 1);
  const incrementCount = () => setCount(count += 1);
  const handleCountChange = (value) => {
    if (Number(value) != value) return;
    return setCount(Number(value));
  };

  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
      <div className="quantity-btns">
        <button className="decrement-btn" onClick={decrementCount}>-</button>
        <input className="quantity-input" type="text" value={count} onChange={(e) => handleCountChange(e.target.value)} />
        <button className="increment-btn" onClick={incrementCount}>+</button>
        <button className="add-to-cart-btn" onClick={() => count ? props.handleAddToCart(props.product, count) : null}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;