import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './Components/Shop';
import ProductPage from './Components/ProductPage';
import productData from './productData';

const RouteSwitch = () => {
  const storeName = 'Bargain Shop';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App storeName={storeName} />} />
        <Route path="/shop" element={<Shop storeName={storeName} />} >
          { productData.map((product) => <Route path={product.id} element={<ProductPage product={product} />} />) }
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;