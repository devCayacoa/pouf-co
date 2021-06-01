import {
	ADD_NEW_PRODUCT_START,
	DELETE_PRODUCT_START,
	FETCH_PRODUCTS_START,
	FETCH_PRODUCT_START,
	SET_EDITED_PRODUCT,
	SET_LOCAL_PRODUCT,
	SET_PRODUCT,
	SET_PRODUCTS,
	UPDATE_FORM_STATE,
	UPDATE_PRODUCT_START,
} from './products.types';

export const addNewProductStart = (productDataFromForm) => ({
	type: ADD_NEW_PRODUCT_START,
	payload: productDataFromForm,
});

export const fetchProductsStart = ({
	filter = '',
	startAfterDoc,
	persistProducts = [],
}) => ({
	type: FETCH_PRODUCTS_START,
	payload: { filter, startAfterDoc, persistProducts },
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

export const setProduct = (productFromFirestore) => ({
	type: SET_PRODUCT,
	payload: productFromFirestore,
});

export const updateProductStart = (product) => ({
	type: UPDATE_PRODUCT_START,
	payload: product,
});

export const updateFormState = (formState) => ({
	type: UPDATE_FORM_STATE,
	payload: formState,
});

export const setEditedProduct = (editedProduct) => ({
	type: SET_EDITED_PRODUCT,
	payload: editedProduct,
});
