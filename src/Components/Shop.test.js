import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Shop from './Shop';
import img1 from '../images/shirt1.jpg';

describe('Shop works correctly', () => {
  const productData = [
    {
      name: 'Shirt 1',
      id: '001',
      price: '5.99',
      image: img1,
    }
  ];
  
  test("renders correct heading", () => {
    render(
      <BrowserRouter>
       <Shop productData={productData} />
      </BrowserRouter>
    );
    
    const shopHeading = screen.getAllByRole("heading")[1];
    
    expect(shopHeading.textContent).toMatch(/shop/i);
  });
});