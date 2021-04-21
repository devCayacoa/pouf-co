import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './forms/Button';

export const AddToCart = ({ id }) => {
const dispatch = useDispatch()	

return (
		<Button
			onClick={() => {}}
			className='bg-black text-white inline-block w-full p-1'>Add to cart</Button>
	);
};
