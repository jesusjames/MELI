import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './index';
import { ProductsReducer } from '../modules/Products/reducer/Products';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: ProductsReducer
  },
  middleware: [saga],
});

saga.run(rootSaga);
