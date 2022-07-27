import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';
import img1 from '../../images/shirt1.jpg';

describe('Product card is working correctly', () => {
  test('render correct product', () => {
    const productData = [
      {
        name: 'Shirt 1',
        id: '001',
        price: '5.99',
        image: img1,
      }
    ];

    render(<ProductCard product={productData[0]} />);
    const productName = screen.getByText(productData[0].name);
    const productPrice = screen.getByText('$' + productData[0].price);
    const productImage = screen.getByRole('img');

    expect(productName.textContent).toMatch(/shirt 1/i);
    expect(productPrice.textContent).toMatch('$5.99');
    expect(productImage).toHaveAttribute('src', productData[0].img);
    expect(productImage).toHaveAttribute('alt', productData[0].name);
  });

  test('Increment and decrement buttons work properly', () => {
    const productData = [
      {
        name: 'Shirt 1',
        id: '001',
        price: '5.99',
        image: img1,
      }
    ];

    render ( <ProductCard product={productData[0]} /> );
    
    const input = screen.getByRole('textbox');
    
    const incrementBtn = screen.getByRole('button', { name: '+' });
    // userEvent.click(incrementBtn);
    // expect(input.value).toBe("1");
    
    const decrementBtn = screen.getByRole('button', { name: '-' });
    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    userEvent.click(decrementBtn);
    expect(input.value).toBe("1");
  });
});