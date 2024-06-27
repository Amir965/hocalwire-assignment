const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                return {
                    ...state,
                    items: [...state.items],
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'UPDATE_QUANTITY':
            const updatedItems = state.items.map(item =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return {
                ...state,
                items: updatedItems,
            };
        default:
            return state;
    }
};

export default cartReducer;
