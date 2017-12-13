import * as types from '../constants/actionTypes';

export const requestProductAction = () => ({
  type: types.PRODUCTS_REQUEST
});

export const successProductAction = (products) => ({
  type: types.PRODUCTS_SUCCESS,
  products
});

export const failureProductAction = (error) => ({
  type: types.PRODUCTS_FAILURE,
  error
});

// import * as actionTypes from './actionTypes';
// import Axios from 'axios';

// // export const createProduct = (product) => {
// //   // Return action
// //   return {
// //     // Unique identifier
// //     type: 'CREATE_PRODUCT',
// //     // Payload
// //     product: product
// //   }
// // };

// export const createProduct = (product) => {
//   return (dispatch) => {
//     return Axios.post('/api/product', product)
//       .then(response => {
//         // Dispatch a synchronous action
//         // to handle data
//         dispatch(createProductSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const createProductSuccess = (product) => {
//   return {
//     type: actionTypes.CREATE_PRODUCT_SUCCESS,
//     product
//   }
// };

// export const fetchProducts = () => {
//   return (dispatch) => {
//     return Axios.get('/api/products')
//       .then(response => {
//         // console.log(response.data)
//         dispatch(fetchProductsSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const fetchProductsSuccess = (products) => {
//   return {
//     type: actionTypes.FETCH_PRODUCTS_SUCCESS,
//     products
//   }
// };