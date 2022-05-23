import React from 'react';

import ProductsRouter from './router/ProductsRouter';

const ProductsModule = () => ({
  name: 'ProductsModule',
  pathBase: '/*',
  componentRouter: <ProductsRouter />
});

export default ProductsModule;
