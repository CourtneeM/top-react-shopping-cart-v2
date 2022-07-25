const ProductCard = (props) => {
  return (
    <div>
      <h1>{props.name} - {props.id}</h1>
    </div>
  );
};

export default ProductCard;