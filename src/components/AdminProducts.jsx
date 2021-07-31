import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
	deleteProductStart,
	fetchProductsStart,
} from '../redux/Products/products.actions';
import { LoadMore } from './LoadMore';

import { TrashIcon } from '@heroicons/react/outline';

const mapState = ({ productsData }) => ({ products: productsData.products });

export const AdminProducts = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(mapState);
	const { data, queryDoc, isLastPage } = products;

	useEffect(() => {
		dispatch(fetchProductsStart({ filter: '' }));
	}, []);

	const handleLoadMore = () => {
		dispatch(
			fetchProductsStart({
				startAfterDoc: queryDoc,
				persistProducts: data,
			})
		);
	};

	const configLoadMore = {
		onClick: handleLoadMore,
		className: 'text-secondary text-md font-semibold text-left mt-3',
	};

	return (
		<div className='flex flex-col mb-6'>
			<h1 className='mt-4 font-bold text-lg'>Store Products</h1>
			<Link
				to='/admin/add-new'
				className='mt-6 block w-full py-1.5 bg-brown text-tertiary rounded font-bold text-center text-[13px]'
			>
				Add new product
			</Link>
			<div className=''>
				<h2 className='font-semibold mt-10'>Existing products</h2>
				<div className='mt-3.5'>
					{data &&
						data.map((product, index) => {
							const {
								id,
								name,
								thumbnails,
								price,
								categories,
								colors,
							} = product;
							return (
								<div
									key={name}
									className='flex w-full justify-between items-center py-3 border-b-2 border-tertiary border-opacity-80'
								>
									<img
										className='h-[60px] w-[60px] rounded-lg object-cover mr-2'
										src={colors[0].thumbnails[0]}
										alt=''
									/>
									<div className='text-[12px] font-medium text-brown'>
										{name}
									</div>
									<Link
										to={`/admin/edit/${id}`}
										className='bg-tertiary text-brown px-2 rounded mr-1 ml-4 text-[12px] font-semibold'
									>
										Edit
									</Link>
									<button
										onClick={() => dispatch(deleteProductStart(id))}
										className='bg-[#F8614C] text-white px-2 rounded text-[12px] font-semibold tracking-wide'
									>
										Delete
									</button>
								</div>
							);
						})}
				</div>
			</div>

			{!isLastPage && <LoadMore {...configLoadMore} />}
		</div>
	);
};
