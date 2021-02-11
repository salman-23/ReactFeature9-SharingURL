import axios from "axios";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCT = "FETCH_PRODUCT";

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const respone = await axios.get("http://localhost:8001/products");
      dispatch({
        type: FETCH_PRODUCT,
        payload: { products: respone.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8001/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8001/products`,
        newProduct
      );
      dispatch({
        type: CREATE_PRODUCT,
        payload: { newProduct: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8001/products/${updatedProduct.id}`,
        updatedProduct
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct: updatedProduct },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
