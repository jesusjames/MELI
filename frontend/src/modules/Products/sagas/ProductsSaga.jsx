import { takeLatest, call, put } from 'redux-saga/effects';
import { ProductsActions } from '../reducer/Products';
import request from '../../../utils/request';
import { ITEMS_API_URL } from '../../../constans';

export function* productsFetchInitSaga(action) {
  const { search } = action.payload;

  const searchURL = `${ITEMS_API_URL}?q=${search}`;

  try {
    yield call(getData, searchURL);
  } catch (error) {
    console.warn('Error productsFetchInitSaga', error);
    yield put(ProductsActions.productsFetchError(error));
  }
}

export function* getProductByIdFetchInitSaga(action) {
  const { id } = action.payload;

  const getProductURL = `${ITEMS_API_URL}/${id}`;

  try {
    yield call(getData, getProductURL);
  } catch (error) {
    console.warn('Error getProductByIdFetchInitSaga', error);
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
  yield takeLatest('Products/productFetchInit', getProductByIdFetchInitSaga);
}
