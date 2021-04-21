import { ADD_TO_CART } from './cart.types';
import { handleAddToCart } from './cart.utils';

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

		default:
			return state;
	}
};

export default cartReducer;
