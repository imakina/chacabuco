const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

const PRODUCT_CREATE = 'PRODUCT_CREATE';
const PRODUCT_REMOVE = 'PRODUCT_REMOVE';
const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
const PRODUCT_FAILURE = 'PRODUCT_FAILURE';

// Types

export const ProductTypes = {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_CREATE,
  PRODUCT_REMOVE,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE
}

// Initial State

const initialState = {
  fetching: false,
  products: {},
  product: {},
  failure: false
}

// Reducers

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  
    case ProductTypes.PRODUCTS_SUCCESS:
      return { ...state, products : action.products };
    case ProductTypes.PRODUCTS_FAILURE:
      return { ...state, failure: true };

    case ProductTypes.PRODUCT_SUCCESS:
      return { ...state, product: action.product, fetching: false };
    case ProductTypes.PRODUCT_FAILURE:
      return { ...state, failure: true };

    default:
      return state;
  }
}

// Actions

export const listRequest = () => ({
  type: ProductTypes.PRODUCTS_REQUEST
});

export const oneRequest = (product) => ({
  type: ProductTypes.PRODUCT_REQUEST
});

export const createRequest = (product) => ({
  type: ProductTypes.PRODUCT_CREATE, product
});

export const removeRequest = (product) => ({
  type: ProductTypes.PRODUCT_REMOVE, product
});

// -

export const listSuccess = (products) => ({
  type: ProductTypes.PRODUCTS_SUCCESS, products
});

export const listFailure = (error) => ({
  type: ProductTypes.PRODUCTS_FAILURE, error
});

export const oneSuccess = (product, operation) => ({
  type: ProductTypes.PRODUCT_SUCCESS, product, operation
});

export const oneFailure = (error) => ({
  type: ProductTypes.PRODUCT_FAILURE, error
});


export default {
  listRequest,
  oneRequest,
  createRequest,

  listSuccess,
  listFailure,
  oneSuccess,
  oneFailure,
  
}