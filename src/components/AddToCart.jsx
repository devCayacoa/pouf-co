import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Cart/cart.actions';
import { Button } from './forms/Button';

export const AddToCart = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<Button
			onClick={() => {
				dispatch(addProduct(product));
			}}
			className='bg-black text-white inline-block w-full p-1'
		>
			Add to cart
		</Button>
	);
};
