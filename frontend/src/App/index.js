import { fork } from 'redux-saga/effects';
import productsSaga from 'modules/Products/sagas/ProductsSaga';

export default function* rootSaga() {
  yield fork(productsSaga);
}
