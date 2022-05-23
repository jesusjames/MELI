import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const ProductsLayout = () => {
  return(
    <div className="container m-auto d-flex w-screen">
      <Header />
      <div className="w-full h-full pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
