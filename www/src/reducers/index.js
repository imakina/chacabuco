import { combineReducers } from 'redux';
import products from './productReducers'

export default combineReducers({
    products: products,
  // More reducers if there are
  // can go here
});