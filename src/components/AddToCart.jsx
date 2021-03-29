import React, { useContext } from 'react';
import { Context } from '../App';

export const AddToCart = ({ id }) => {
	const { state, dispatch } = useContext(Context);
	return (
		<button
			onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
			className=''></button>
	);
};
