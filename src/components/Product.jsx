import React from 'react';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils';
import { AddToCart } from './AddToCart';

export const Product = ({ product }) => (
	<div className='p-4'>
		<Link to={`/product/${product.id}`}>
			<img src={product.thumbnails[0]} alt='' className='' />
		</Link>
		<Link to={`/product/${product.uid}`}>
			<h3 className='font-bold text-md ml-1 mt-2'>{product.name}</h3>
		</Link>
		<h4 className='font-bold text-lg mt-2 ml-1'>
			${numberWithCommas(product.price)}
		</h4>
		<AddToCart product={product} />
	</div>
);
