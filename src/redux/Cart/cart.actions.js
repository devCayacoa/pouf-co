import {
	ADD_TO_CART,
	CLEAR_CART,
	DECREMENT_CART_ITEM,
	REMOVE_CART_ITEM,
} from './cart.types';

export const addProduct = (product) => ({
	type: ADD_TO_CART,
	payload: product,
});

export const deleteCartItem = (cartItem) => ({
	type: REMOVE_CART_ITEM,
	payload: cartItem,
});

export const decrementCartItem = (cartItem) => ({
	type: DECREMENT_CART_ITEM,
	payload: cartItem,
});

export const clearCart = () => ({
	type: CLEAR_CART,
});
