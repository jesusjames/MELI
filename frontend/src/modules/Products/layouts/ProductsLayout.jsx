import React from 'react';

import { Outlet } from 'react-router-dom';

const ProductsLayout = () => {
  return(
    <div>
      <h1>ProductsLayout</h1>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
