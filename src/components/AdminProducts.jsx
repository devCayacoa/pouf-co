import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteProductStart, fetchProductsStart } from '../redux/Products/products.actions';

const mapState = ({ productsData }) => ({ products: productsData.products });

export const AdminProducts = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(mapState);

	useEffect(() => {
		dispatch(fetchProductsStart());
	}, []);

	return (
		<div className={'manage-products'}>
			<Link to={'/admin/add-new'}>Add new product</Link>
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
									{products.length > 0 &&
										products.map((product, index) => {
											const { uid ,name, thumbnail, price, category } = product;
											return (
												<tr key={index} className={'border-2 '}>
													<td className={'border-2'}>
														<img src={thumbnail[0]} alt='' />
													</td>
													<td>{name}</td>
													<td>${price}</td>
													<td>{category}</td>
												<td><button onClick={()=>dispatch(deleteProductStart(uid))}>Delete</button></td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
