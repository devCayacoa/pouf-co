import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchProductsStart } from '../redux/Products/products.actions';
import Select from './forms/Select';
import { LoadMore } from './LoadMore';
import { Product } from './Product';

const mapState = ({ productsData }) => ({
	products: productsData.products,
});

export const ProductResults = ({}) => {
	const history = useHistory();
	const { filterType } = useParams();
	const dispatch = useDispatch();

	const { products } = useSelector(mapState);
	const { data, queryDoc, isLastPage } = products;

	useEffect(() => {
		dispatch(fetchProductsStart({ filterType }));
	}, [filterType]);
	if (!Array.isArray(data)) return null;

	const handleFilter = (e) => {
		const nextFilter = e.target.value;
		history.push(`/search/${nextFilter}`);
	};

	const configFilter = {
		defaultValue: filterType,
		options: [
			{ name: 'Show all', value: '' },
			{ name: 'Mens', value: 'mens' },
			{ name: 'Womens', value: 'womens' },
		],
		handleChange: handleFilter,
	};

	const handleLoadMore = () => {
		dispatch(
			fetchProductsStart({
				filterType,
				startAfterDoc: queryDoc,
				persistProducts: data,
			})
		);
	};

	const configLoadMore = {
		handleLoadMore,
	};
	return (
		<div id={'products-container'} className='mt-2'>
			<h1 className=''>Browse products</h1>
			<Select {...configFilter} />
			<h5 className={'ml-4 mb-2 text-sm text-gray-700'}>{data.length} items</h5>
			{data.length < 1 ? (
				<p className=''>No search results.</p>
			) : (
				<div
					id={'products-grid'}
					className={'grid border-t-2 border-gray-200 grid-cols-2'}>
					{data.map((product) => {
						if (
							!product.name ||
							!product.thumbnail
						)
							return null;

						return <Product key={product.uid} product={product} />;
					})}
				</div>
			)}
			{!isLastPage && <LoadMore {...configLoadMore} />}
		</div>
	);
};
