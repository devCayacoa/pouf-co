import { ADD_TO_CART } from './cart.types';

export const addProduct = (payload) => ({
	type: ADD_TO_CART,
	payload,
});
