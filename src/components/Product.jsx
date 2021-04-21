import React from 'react';
import { Link } from 'react-router-dom';
import { AddToCart } from './AddToCart';

export const Product = ({ product }) => {
	return (
		<div className='p-4'>
			<Link to={`/product/${product.uid}`}>
				<img src={product.thumbnail[0]} alt='' className={''} />
			</Link>
			<h3 className='font-bold text-md ml-1 mt-2'>{product.name}</h3>
			<h4 className='font-bold text-lg mt-2 ml-1'>${product.price}</h4>
			<AddToCart id={product.uid} />
		</div>
	);
};
