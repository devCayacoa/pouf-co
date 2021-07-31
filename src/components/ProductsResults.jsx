import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchProductsStart } from '../redux/Products/products.actions';
import { categoriesValues } from '../utils';
import SearchWithAlgolia from './SearchWithAlgolia';
import Select from './forms/Select';
import { LoadMore } from './LoadMore';
import { Product } from './Product';

const mapState = ({ productsData }) => ({
	products: productsData.products,
});

export const ProductResults = () => {
	const history = useHistory();
	const { filterType } = useParams();
	const dispatch = useDispatch();

	const { products } = useSelector(mapState);
	const { data, queryDoc, isLastPage } = products;

	useEffect(() => {
		dispatch(fetchProductsStart({ filterType }));
	}, [filterType, dispatch]);
	if (!Array.isArray(data)) return null;

	const handleFilter = (e) => {
		const nextFilter = e.target.value;
		history.push(`/search/${nextFilter}`);
	};

	const configFilter = {
		defaultValue: filterType ? filterType : '',
		options: [
			...Object.keys(categoriesValues).map((key) => categoriesValues[key]),
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
		<div id='products-container' className='mt-2'>
			<h1 className=''>Browse poufs</h1>
			<SearchWithAlgolia />

			{/* <Select {...configFilter} />
			<h5 className='ml-4 mb-2 text-sm text-gray-700'>{data.length} items</h5>
			{data.length < 1 ? (
				<p className=''>No search results.</p>
			) : (
				<div id='products-grid' className='border-t-2 border-gray-200'>
					{data.map((product) => {
						return !product.name ? null : (
							<Product key={product.id} product={product} />
						);
					})}
				</div>
			)}
			{!isLastPage && <LoadMore {...configLoadMore} />} */}
		</div>
	);
};
