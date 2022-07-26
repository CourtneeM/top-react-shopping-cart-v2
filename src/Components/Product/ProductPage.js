const ProductPage = (props) => {
  const { name, id, img } = props;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default ProductPage;