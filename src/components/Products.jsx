import React from 'react';
import { Product } from './Product';

export const Products = ({ products }) => {
	return (
		<div id={'products-container'} className='mt-2'>
			<h5 className={'ml-4 mb-2 text-sm text-gray-700'}>
				{products.length} items
			</h5>
			<div
				id={'products-grid'}
				className={'grid border-t-2 border-gray-200 grid-cols-2'}>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
