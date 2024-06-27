const initialState = {
    items: [],
    currentProduct: null,
    categories: [],
    status: 'idle',
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                status: 'succeeded',
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                status: 'failed',
                error: action.payload,
            };
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                currentProduct: action.payload,
            };
        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
            };
        case 'FETCH_CATEGORIES_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS':
            return {
                ...state,
                items: action.payload,
            };
        case 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
