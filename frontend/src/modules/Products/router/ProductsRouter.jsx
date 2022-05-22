import React from 'react';

import { Route, Routes } from 'react-router-dom';
import ProductsLayout from '../layouts/ProductsLayout';

const ProductsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsLayout/>}>
        <Route index element={<h1>Home</h1>}/>
        <Route path="items" element={<h3>lista de productos</h3>}/>
        <Route path="items/:id" element={<h3>Detalle producto</h3>}/>
        <Route path="*" element={<h3>Pagina no encontrada 404</h3>} />
      </Route>
    </Routes>
  );
};

export default ProductsRouter;
