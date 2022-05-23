import React from 'react';

import { Route, Routes } from 'react-router-dom';
import ProductsLayout from '../layouts/ProductsLayout';
import ListProductsPage from '../Pages/ListProductsPage/ListProductsPage';
import HomePage from '../Pages/HomePage/HomePage';
import DetailPage from '../Pages/DetailPage/DetailPage';

const ProductsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsLayout/>}>
        <Route index element={<HomePage />}/>
        <Route path="items" element={<ListProductsPage />}/>
        <Route path="items/:id" element={<DetailPage />}/>
        <Route path="*" element={<h3>Pagina no encontrada 404</h3>} />
      </Route>
    </Routes>
  );
};

export default ProductsRouter;
