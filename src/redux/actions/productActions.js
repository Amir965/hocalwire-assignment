import axios from 'axios';
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCTS_FAILURE',
            payload: error.message,
        });
    }
};

export const fetchProductById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: 'FETCH_PRODUCT_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCT_FAILURE',
            payload: error.message,
        });
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/categories`);
        dispatch({
            type: 'FETCH_CATEGORIES_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_CATEGORIES_FAILURE',
            payload: error.message,
        });
    }
};

export const fetchProductsByCategory = (category) => async (dispatch) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        dispatch({
            type: 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE',
            payload: error.message,
        });
    }
};
