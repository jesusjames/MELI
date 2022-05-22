import React from 'react';

import ProductsRouter from './router/ProductsRouter';

const AuthModule = () => ({
  name: 'ProductsModule',
  pathBase: '/*',
  componentRouter: <ProductsRouter />
});

export default AuthModule;
