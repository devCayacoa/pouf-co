import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { fetchProductsStart, setProducts } from './products.actions';
import {
	handleAddProduct,
	handleDeleteProduct,
	handleFetchProducts,
} from './products.helpers';
import {
	ADD_NEW_PRODUCT_START,
	DELETE_PRODUCT_START,
	FETCH_PRODUCTS_START,
} from './products.types';

export function* addNewProduct({ payload }) {
	const timestamp = new Date();
	try {
		console.log('Handling new product... ' + payload.name);

		yield handleAddProduct({
			...payload,
			adminUID: auth.currentUser.uid,
			createdDate: timestamp,
		});
		yield put(fetchProductsStart());
	} catch (error) {
		console.log(error);
	}
}

export function* fetchProducts() {
	try {
		const products = yield handleFetchProducts();
		yield put(setProducts(products));
	} catch (error) {
		// console.log(error)
	}
}

export function* deleteProduct({payload: uid}) {
	try {
		console.log("UID " + uid)
		yield handleDeleteProduct(uid);
		yield put(fetchProductsStart());
	} catch (error) {
		console.log(error);
	}
}

export function* onFetchProductsStart() {
	yield takeLatest(FETCH_PRODUCTS_START, fetchProducts);
}

export function* onAddNewProductStart() {
	yield takeLatest(ADD_NEW_PRODUCT_START, addNewProduct);
}

export function* onDeleteProductStart() {
	yield takeLatest(DELETE_PRODUCT_START, deleteProduct);
}

export function* productsSagas() {
	yield all([
		call(onAddNewProductStart),
		call(onFetchProductsStart),
		call(onDeleteProductStart),
	]);
}
