import {
	SET_EDITED_PRODUCT,
	SET_PRODUCT,
	SET_PRODUCTS,
	UPDATE_FORM_STATE,
} from './products.types';

const INITIAL_START = {
	products: {},
	product: {
		name: '',
		tags: [],
		colors: [
			{
				color: '',
				thumbnails: [],
				price: 0,
			},
		],
		description: '',
		categories: [],
	},
	editedProduct: {},
	form: {},
};

const productsReducer = (state = INITIAL_START, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return { ...state, products: payload };

		case SET_PRODUCT:
			return { ...state, product: payload };

		case SET_EDITED_PRODUCT:
			return { ...state, editedProduct: payload };

		case UPDATE_FORM_STATE:
			return { ...state, form: payload };

		default:
			return state;
	}
};

export default productsReducer;
