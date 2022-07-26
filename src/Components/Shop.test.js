import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from './Shop';
import img1 from '../images/shirt1.jpg';

test("renders correct product", () => {
  const productData = [
    {
      name: 'Shirt 1',
      id: '001',
      price: '5.99',
      image: img1,
    }
  ]

  render(
    <BrowserRouter>
      <Shop numCartItems={0} productData={productData} />
    </BrowserRouter>
  );

  const productName = screen.getByText(productData[0].name);
  const productPrice = screen.getByText(productData[0].price);
  // const productImageAlt = screen.getElementByClassName(productData[0].name);

  expect(productName.textContent).toMatch(/shirt 1/i);
  expect(productPrice.textContent).toMatch(/5.99/i);
  // expect(productImageAlt.textContent).toMatch(/shirt 1/i);
});