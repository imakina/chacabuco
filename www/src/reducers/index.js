import { combineReducers } from 'redux';
// import products from './productRedux'

export default combineReducers({
    product: require('./productRedux').reducer,
  // More reducers if there are
  // can go here
});