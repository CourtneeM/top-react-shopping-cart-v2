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
      <p>{name}</p>
      <p>${price}</p>
      <div>
        <button onClick={decrementCount}>-</button>
        <input type="text" value={count} onChange={(e) => handleCountChange(e.target.value)} />
        <button onClick={incrementCount}>+</button>
        <button onClick={() => count ? props.handleAddToCart(props.product, count) : null}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;