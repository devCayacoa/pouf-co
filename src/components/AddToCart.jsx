import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Cart/cart.actions';
import { Button } from './forms/Button';
import PropTypes from 'prop-types';

export const AddToCart = ({ product, classes, children }) => {
	const dispatch = useDispatch();

	return (
		<button
			onClick={() => {
				dispatch(
					addProduct({
						...product.colors[product.colorVariant],
						...product,
						colors: null,
					})
				);
			}}
			className={classes}
		>
			Add to cart
		</button>
	);
};

AddToCart.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		thumbnails: PropTypes.array.isRequired,
	}),
	classes: PropTypes.string,
};
