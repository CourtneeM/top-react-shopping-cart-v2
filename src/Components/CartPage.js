import Navbar from './Navbar';

const CartPage = (props) => {
  return (
    <div>
      <Navbar numCartItems={props.numCartItems} />
      <h1>Shopping Cart</h1>

      { 
        props.shoppingCart.map((cartProduct) => {
          return (
            <div>
              <div>
                <img src={cartProduct.product.image} alt={cartProduct.product.name} />
                <p>{cartProduct.product.name}</p>
              </div>
              <div>
                <button onClick={() => props.handleEditCartCount(cartProduct.product, cartProduct.count - 1)}>-</button>
                <p>{cartProduct.count}</p>
                <button onClick={() => props.handleEditCartCount(cartProduct.product, cartProduct.count + 1)}>+</button>
              </div>
              <button onClick={() => props.handleRemoveFromCart(cartProduct)}>Remove from cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default CartPage;