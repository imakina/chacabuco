import { put, call } from 'redux-saga/effects';
import { 
  listSuccess, 
  listFailure, 
  oneSuccess, 
  oneFailure
} from '../reducers/productRedux'

// import { fetchProducts } from '../services/Api';
// import * as types from '../constants/actionTypes';
// import { successProductAction, failureProductAction } from '../actions/productActions';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
// export function* searchMediaSaga({ payload }) {
//     try {
//       const videos = yield call(shutterStockVideos, payload);
//       const images = yield call(flickrImages, payload);
//       yield [
//         put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
//         put({ type: types.SELECTED_VIDEO, video: videos[0] }),
//         put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
//         put({ type: types.SELECTED_IMAGE, image: images[0] })
//       ];
//     } catch (error) {
//       yield put({ type: 'SEARCH_MEDIA_ERROR', error });
//     }
//   }

export function* listProductsSaga(api, action) {
    try {
      const response = yield call(api.listProducts);
      // console.log("response",response.data);
      yield put(listSuccess(response.data))
    } catch (error) {
      yield put(listFailure(error))
    }
  }

export function* createProductSaga(api, action) {
  
  try {
    const { product } = action
    const response = yield call(api.createProduct, product)
    yield put(oneSuccess(response.data))
  } catch (error) {
    yield put(oneFailure(error))
  }

}

export function* removeProductSaga(api, action) {
  
  try {
    const { product } = action
    const response = yield call(api.removeProduct, product.id)
    // console.log("remove",response)
    if (response.ok)
      yield put(oneSuccess(product))
    else
      yield put(oneFailure(response.error))

  } catch (error) {
    yield put(oneFailure(error))
  }

}

  