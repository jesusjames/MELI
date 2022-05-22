import { takeLatest, call, put } from 'redux-saga/effects';
import { ProductsActions } from '../reducer/Products';
import request from '../../../utils/request';

const itemsApiURL = `${process.env.REACT_APP_API_URL}items`;

export function* productsFetchInitSaga(action) {
  const { search } = action.payload;

  const searchURL = `${itemsApiURL}?q=${search}`;

  try {
    yield call(getData, searchURL);
  } catch (error) {
    console.warn('Error productsFetchInitSaga', error);
    yield put(ProductsActions.productsFetchError(error));
  }
}

function* getData(url) {
  const response = yield call(request, url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(response){
    yield put(ProductsActions.productsFetchSuccess(response))
  }
}

export default function* productsSaga() {
  yield takeLatest('Products/productsFetchInit', productsFetchInitSaga);
  yield takeLatest('Products/productFetchInit', productsFetchInitSaga);
}
