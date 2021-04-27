import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
	deleteProductStart,
	fetchProductsStart,
} from '../redux/Products/products.actions';
import { LoadMore } from './LoadMore';

const mapState = ({ productsData }) => ({ products: productsData.products });

export const AdminProducts = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(mapState);
	const { data, queryDoc, isLastPage } = products;

	useEffect(() => {
		dispatch(fetchProductsStart());
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
		handleLoadMore,
	};
	return (
		<div className='manage-products'>
			<Link to='/admin/add-new'>Add new product</Link>
			<table className=''>
				<tbody>
					<tr>
						<th>
							<h1>Manage Products</h1>
						</th>
					</tr>
					<tr>
						<td>
							<table>
								<tbody>
									{data &&
										data.map((product, index) => {
											const { id, name, thumbnails, price, category } = product;
											return (
												<tr key={index} className='border-2 '>
													<td className='border-2'>
														<img src={thumbnails[0]} alt='' />
													</td>
													<td>{name}</td>
													<td>${price}</td>
													<td>{category}</td>
													<td>
														<button
															onClick={() => dispatch(deleteProductStart(id))}
														>
															Delete
														</button>
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
			{!isLastPage && <LoadMore {...configLoadMore} />}
		</div>
	);
};
