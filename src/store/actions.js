export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const createProduct = (newProduct) => ({
  type: CREATE_PRODUCT,
  payload: { newProduct },
});

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: { updatedProduct },
});
