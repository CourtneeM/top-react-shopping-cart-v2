import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar is properly rendered', () => {
  test('heading renders properly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading'); 
    
    expect(heading.textContent).toMatch(/bargain shop/i);
  });
  
  test('cart displays correct number of items', () =>{
    const numCartItems = 1
    
    render(
      <BrowserRouter>
        <Navbar numCartItems={numCartItems} />
      </BrowserRouter>
    );

    const numCartItemsEl = screen.getByText(numCartItems);
    expect(numCartItemsEl.textContent).toMatch(/1/);
  });

  // test('clicking on cart icon will navigate to cart page', async () => {
  //   render (
  //     <BrowserRouter>
  //       <Navbar />
  //     </BrowserRouter>
  //   );

  //   userEvent.click(screen.getAllByRole('link')[1]);

  //   await (() => {
  //     expect(screen.getByRole('heading').textContent).toMatch(/shopping cart/i);
  //   });
  // });
});