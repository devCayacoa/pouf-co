import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
	fetchProductStart,
	setProduct,
} from '../redux/Products/products.actions';
import { AddToCart } from './AddToCart';
import { Button } from './forms/Button';

const mapState = ({ productsData }) => ({
	product: productsData.product,
});
export const ProductCard = () => {
	const dispatch = useDispatch();
	const { product } = useSelector(mapState);
	const { productId } = useParams();

	const {
		name,
		category,
		tags,
		price,
		thumbnail,
		createDate,
		description,
	} = product;

	useEffect(() => {
		dispatch(fetchProductStart(productId));
		return () => dispatch(setProduct({}));
	}, []);
	const configAddToCart = { type: 'button' };
	if (!name) return null;

	return (
		<div className='product-card'>
			<div className='hero'>
				{}
				<img src={thumbnail[0]} alt='product' />
				<div className='product-details'>
					<ul>
						<li>
							<h1 className={'product-name'}>{name}</h1>
						</li>
						<li>
							<span className='product-price'>${price}</span>
						</li>

						<li className='product-addtocart'>
							<AddToCart product={product} />
						</li>
						<span dangerouslySetInnerHTML={{ __html: description }}></span>
					</ul>
				</div>
			</div>
		</div>
	);
};
