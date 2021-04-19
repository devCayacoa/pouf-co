import { SET_PRODUCTS } from './products.types';

const INITIAL_START = {
	products: [],
};

const productsReducer = (state = INITIAL_START, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return {...state, products: payload};

		default:
			return state;
	}
};

export default productsReducer;
