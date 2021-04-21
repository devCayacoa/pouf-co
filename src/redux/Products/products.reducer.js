import { SET_PRODUCT, SET_PRODUCTS } from './products.types';

const INITIAL_START = {
	products: [],
	product: {},
};

const productsReducer = (state = INITIAL_START, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return { ...state, products: payload };
		case SET_PRODUCT:
			return { ...state, product: payload };
		default:
			return state;
	}
};

export default productsReducer;
