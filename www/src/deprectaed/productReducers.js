import initialState from './initialState';
import * as types from '../constants/actionTypes';

export const LoginTypes = {
  LOGIN_O_AUTH,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_REFRESH_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  SOCIAL_AUTHENTICATE_FAILURE,
  TOKEN_EXPIRED,
  REMOVE_COVER,
  RESET_ERRORS,
  LOGOUT
}

const initialState = {
  fetching: false,
  isAuthenticated: false,
  failedAuthMessage: '',
  accessToken: null,
  cover: true
}

// Handles image related actions
export default function (state = initialState.products, action) {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
    console.log("action",action)
    //const products = "asfasdfasfd"
      return [...state, action.products];
    case types.PRODUCTS_FAILURE:
      return { ...state, failure: true };
    default:
      return state;
  }
}

// export default (state = [], action) => {
//     switch (action.type){

//       case 'CREATE_PRODUCT':
//           console.log(action.product)
//           return [
//             ...state,
//             Object.assign({}, action.product)
//           ];

//       case 'FETCH_PRODUCT_SUCCESS':
//           return action.products;

//       default:
//           return state;
//     }
//   };