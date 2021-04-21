import {
	ADD_NEW_PRODUCT_START,
	DELETE_PRODUCT_START,
	FETCH_PRODUCTS_START,
	SET_PRODUCTS,
} from './products.types';

export const addNewProductStart = (payload) => ({
	type: ADD_NEW_PRODUCT_START,
	payload,
});

export const fetchProductsStart = (payload={}) => ({ type: FETCH_PRODUCTS_START, payload });

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

export const deleteProductStart = (payload) => ({
	type: DELETE_PRODUCT_START,payload
});
