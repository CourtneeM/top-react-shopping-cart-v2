import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartPage from './CartPage';

describe('Cart page renders correctly', () => {

  test('If cart is empty, empty cart message is displayed', () => {
    const numCartItems = 0;
    
    render(
      <BrowserRouter>
        <CartPage numCartItems={numCartItems} />
      </BrowserRouter>
    );
    
    const emptyCartMessage = screen.getByText('Your cart is currently empty!');
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test('Product is displayed in cart', () => {
    const numCartItems = 2;
    const shoppingCart = [
      {
        product: {
          name: 'Shirt 1',
          id: '001',
          price: '5.99',
        },
        count: 2,
      }
    ];

    render (
      <BrowserRouter>
        <CartPage shoppingCart={shoppingCart} numCartItems={numCartItems} />
      </BrowserRouter>
    );

    const productName = screen.getByText(shoppingCart[0].product.name);
    
    expect(productName.textContent).toMatch(/shirt 1/i);
  });

  test('Remove from cart button works properly', () => {
    let numCartItems = 2;
    let shoppingCart = [
      {
        product: {
          name: 'Shirt 1',
          id: '001',
          price: '5.99',
        },
        count: 2,
      }
    ];

    const handleRemoveFromCart = ({product, count}) => {
      let shoppingCartCopy = [...shoppingCart];
  
      shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);
  
      shoppingCart = shoppingCartCopy;
      numCartItems = numCartItems - count;
    }

    render (
      <BrowserRouter>
        <CartPage
          shoppingCart={shoppingCart}
          numCartItems={numCartItems}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </BrowserRouter>
    );

    const removeBtn = screen.getByRole('button', { name: 'Remove from cart' });
    userEvent.click(removeBtn);

    expect(numCartItems).toBe(0);
  });

  test('Increment and decrement quantity buttons work properly', () => {
    let numCartItems = 2;
    let shoppingCart = [
      {
        product: {
          name: 'Shirt 1',
          id: '001',
          price: '5.99',
        },
        count: 2,
      }
    ];

    const handleEditCartCount = (product, newCount) => {
      let shoppingCartCopy = [...shoppingCart];
  
      shoppingCartCopy.forEach((cartProduct) => {
        if (cartProduct.product.id === product.id) {
          if (newCount > cartProduct.count) {
            numCartItems = numCartItems + (newCount - cartProduct.count);
          } else {
            numCartItems = numCartItems - (cartProduct.count - newCount);
          }
          
          cartProduct.count = newCount;
          if (cartProduct.count === 0) shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);
        }
      });
  
      shoppingCart = shoppingCartCopy;
    }

    render (
      <BrowserRouter>
        <CartPage
          shoppingCart={shoppingCart}
          numCartItems={numCartItems}
          handleEditCartCount={handleEditCartCount}
        />
      </BrowserRouter>
    );
    
    // const decrementBtn = screen.getByRole('button', { name: '-' });
    // userEvent.click(decrementBtn);
    // expect(numCartItems).toBe(1);
    
    const incrementBtn = screen.getByRole('button', { name: '+' });
    userEvent.click(incrementBtn);
    expect(numCartItems).toBe(3);
  });

  // test('Change quantity input textbox works properly', async () => {
  //   let numCartItems = 2;
  //   let shoppingCart = [
  //     {
  //       product: {
  //         name: 'Shirt 1',
  //         id: '001',
  //         price: '5.99',
  //       },
  //       count: 2,
  //     }
  //   ];

  //   const handleEditCartCount = (product, newCount) => {
  //     let shoppingCartCopy = [...shoppingCart];
  
  //     shoppingCartCopy.forEach((cartProduct) => {
  //       if (cartProduct.product.id === product.id) {
  //         if (newCount > cartProduct.count) {
  //           numCartItems = numCartItems + (newCount - cartProduct.count);
  //         } else {
  //           numCartItems = numCartItems - (cartProduct.count - newCount);
  //         }
          
  //         cartProduct.count = newCount;
  //         if (cartProduct.count === 0) shoppingCartCopy = shoppingCartCopy.filter((cartProduct) => cartProduct.product.id !== product.id);
  //       }
  //     });
  
  //     shoppingCart = shoppingCartCopy;
  //   }

  //   render (
  //     <BrowserRouter>
  //       <CartPage
  //         shoppingCart={shoppingCart}
  //         numCartItems={numCartItems}
  //         handleEditCartCount={handleEditCartCount}
  //       />
  //     </BrowserRouter>
  //   );
    
  //   const input = screen.getByRole('textbox');
  //   await userEvent.type(input, "4");
  //   expect(input.value).toBe("4");
  // });
})