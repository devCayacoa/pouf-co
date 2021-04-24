import {
	ADD_NEW_PRODUCT_START,
	DELETE_PRODUCT_START,
	FETCH_PRODUCTS_START,
	FETCH_PRODUCT_START,
	SET_PRODUCT,
	SET_PRODUCTS,
} from './products.types';

export const addNewProductStart = (productDataFromForm) => ({
	type: ADD_NEW_PRODUCT_START,
	payload: productDataFromForm,
});

export const fetchProductsStart = (filters = {}) => ({
	type: FETCH_PRODUCTS_START,
	payload: filters,
});

export const setProducts = (productsFromFirestore) => ({
	type: SET_PRODUCTS,
	payload: productsFromFirestore,
});

export const deleteProductStart = (idOfProductToDelete) => ({
	type: DELETE_PRODUCT_START,
	payload: idOfProductToDelete,
});

export const fetchProductStart = (idOfProductToFetch) => ({
	type: FETCH_PRODUCT_START,
	payload: idOfProductToFetch,
});

export const setProduct = (productsFromFirestore) => ({
	type: SET_PRODUCT,
	payload: productsFromFirestore,
});
