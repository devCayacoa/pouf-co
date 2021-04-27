import { all, takeLatest, put, call } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import {
	handleGetOrder,
	handleGetUserOrderHistory,
	handleSaveOrder,
} from './orders.helpers';
import {
	GET_ORDER_DETAILS_START,
	GET_USER_ORDER_HISTORY_START,
	SAVE_ORDER_HISTORY_START,
} from './orders.types';
import { clearCart } from '../Cart/cart.actions';
import { setOrderDetails, setUserOrderHistory } from './orders.actions';

export function* saveOrderHistory({ payload }) {
	try {
		yield handleSaveOrder({
			...payload,
			orderUserId: auth.currentUser.uid,
			orderCreatedDate: new Date(),
		});
		yield put(clearCart());
	} catch (error) {
		// console.log(error)
	}
}

export function* getUserOrderHistory({ payload }) {
	try {
		const history = yield handleGetUserOrderHistory(payload);
		yield put(setUserOrderHistory(history));
	} catch (error) {
		console.log(error);
	}
}

export function* getOrderDetails({ payload }) {
	try {
		const orderDetails = yield handleGetOrder(payload);
		yield put(setOrderDetails(orderDetails));
	} catch (error) {
		// console.log(error)
	}
}

export function* onSaveOrderHistoryStart() {
	yield takeLatest(SAVE_ORDER_HISTORY_START, saveOrderHistory);
}

export function* onGetUserOrderHistoryStart() {
	yield takeLatest(GET_USER_ORDER_HISTORY_START, getUserOrderHistory);
}

export function* onGetOrderDetailsStart() {
	yield takeLatest(GET_ORDER_DETAILS_START, getOrderDetails);
}

export function* ordersSagas() {
	yield all([
		call(onSaveOrderHistoryStart),
		call(onGetUserOrderHistoryStart),
		call(onGetOrderDetailsStart),
	]);
}
