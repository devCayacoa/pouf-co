import { SET_ORDER_DETAILS, SET_USER_ORDER_HISTORY } from './orders.types';

const initialState = { orderHistory: [], orderDetails: {} };
const ordersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_USER_ORDER_HISTORY:
			return { ...state, orderHistory: payload };
		case SET_ORDER_DETAILS:
			return { ...state, orderDetails: payload };
		default:
			return state;
	}
};

export default ordersReducer;
