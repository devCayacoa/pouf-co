import {
	SAVE_ORDER_HISTORY_START,
	GET_USER_ORDER_HISTORY_START,
	SET_USER_ORDER_HISTORY,
	GET_ORDER_DETAILS_START,
	SET_ORDER_DETAILS,
} from './orders.types';

export const saveOrderHistoryStart = (order) => ({
	type: SAVE_ORDER_HISTORY_START,
	payload: order,
});

export const getUserOrderHistoryStart = ({
	uid,
	status = '',
	persistOrders = [],
	startAfterDoc,
}) => ({
	type: GET_USER_ORDER_HISTORY_START,
	payload: { uid, status, persistOrders, startAfterDoc },
});

export const setUserOrderHistory = (history) => ({
	type: SET_USER_ORDER_HISTORY,
	payload: history,
});

export const getOrderDetailsStart = (orderId) => ({
	type: GET_ORDER_DETAILS_START,
	payload: orderId,
});

export const setOrderDetails = (order) => ({
	type: SET_ORDER_DETAILS,
	payload: order,
});
