import React, { useState } from 'react';

const ProductCard = (props) => {
  const name = props.product.name;
  const image = props.product.image;
  
  let [count, setCount] = useState(0);

  const decrementCount = () => count <= 0 ? null : setCount(count -= 1);
  const incrementCount = () => setCount(count += 1);

  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <p>{name}</p>
      <div>
        <button onClick={decrementCount}>-</button>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={() => count ? props.handleAddToCart(props.product, count) : null}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;