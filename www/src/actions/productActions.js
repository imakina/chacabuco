export const createProduct = (product) => {
    // Return action
    return {
      // Unique identifier
      type: 'CREATE_PRODUCT',
      // Payload
      product: product
    }
  };