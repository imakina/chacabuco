import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas'; 

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  return {
    ...createStore(rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;

// if (process.env.NODE_ENV === 'production') {
//     module.exports = require('./configureStore.prod');
//   } else {
//     module.exports = require('./configureStore.dev');
//   }