import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api'

import { ProductTypes } from '../reducers/productRedux';
import { listProductsSaga, createProductSaga, removeProductSaga } from './productSaga';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const api = API.create()

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
// export default function* fetchProducts() {
//   yield takeLatest(types.PRODUCTS_REQUEST, fetchProductsSaga, api);
// }

export default function * root () {
  yield all([
    takeLatest(ProductTypes.PRODUCTS_REQUEST, listProductsSaga, api),
    takeLatest(ProductTypes.PRODUCT_CREATE, createProductSaga, api),
    takeLatest(ProductTypes.PRODUCT_REMOVE, removeProductSaga, api),
  ])
}
