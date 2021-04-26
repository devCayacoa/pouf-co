import {
	ADD_TO_CART,
	CLEAR_CART,
	DECREMENT_CART_ITEM,
	REMOVE_CART_ITEM,
} from './cart.types';
import {
	handleAddToCart,
	handleDecrementCartItem,
	handleDeleteFromCart,
} from './cart.utils';

const initialState = {
	cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: handleAddToCart({
					prevCartItems: state.cartItems,
					nextCartItem: payload,
				}),
			};
		case REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: handleDeleteFromCart(state.cartItems, payload),
			};

		case DECREMENT_CART_ITEM:
			return {
				...state,
				cartItems: handleDecrementCartItem(state.cartItems, payload),
			};

		case CLEAR_CART:
			return { ...state, ...initialState };
		default:
			return state;
	}
};

export default cartReducer;
