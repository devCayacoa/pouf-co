import React from 'react';
import { Link } from 'react-router-dom';

export const Product = ({ product }) => {
	return (
		<Link to={`/product/${product.id}`}>
			<div className='p-4'>
				<img src={product.imgs[0]} alt='' className={''} />
				<h3 className='font-bold text-md ml-1 mt-2'>{product.name}</h3>
				<h4 className='font-medium text-gray-600 text-sm ml-1'>
					{product.desc}
				</h4>
				<h4 className='font-bold text-lg mt-2 ml-1'>${product.price}</h4>
			</div>
		</Link>
	);
};
