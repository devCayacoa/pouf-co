import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';

import WithLoading from '../../hoc/WithLoading';

import {
	fetchProductStart,
	setProduct,
} from '../../redux/Products/products.actions';

import { numberWithCommas } from '../../utils';

import Accordion from '../Accordion';

import { AddToCart } from '../AddToCart';

import StarRatings from 'react-star-ratings';

import './ProductCard.styles.css';

const mapState = ({ productsData }) => ({
	product: productsData.product,
});

const ProductCard = () => {
	const dispatch = useDispatch();
	const { product } = useSelector(mapState);
	const { productId } = useParams();

	const [colorVariant, setColorVariant] = useState(0);
	const [ratings, setRatings] = useState(0);

	const {
		name,
		categories,
		tags,
		price,
		colors,
		description,
		rating = 4.5,
		numberRatings = 10,
	} = product;

	useEffect(() => {
		dispatch(fetchProductStart(productId));
		if (rating) {
			setRatings(rating);
		}
		return () => dispatch(setProduct({}));
	}, [productId, dispatch]);

	const configAccordion = {
		title: 'Product description',
		content: description ? description.replace('\\n', ' ') : '',
		accordionClasses:
			'text-secondary font-semibold text-secondary cursor-pointer w-full outline-none rounded mt-4 cursor-pointer py-1 px-2 flex items-center transition-colors duration-150 ease-linear focus:outline-none focus:hover:active:bg-gray-400',
		sectionClasses: 'flex flex-col',
		iconClasses: 'ml-auto transition transform duration-150 ease-linear w-5',
		contentClasses:
			'mt-2 px-2 overflow-hidden transition-max-height duration-300 ease-linear',

		rotateClasses: 'transform rotate-180',
		activeClasses: 'bg-secondary !text-white',
		textClasses: 'description',
	};

	if (!name) return null;

	return (
		<WithLoading>
			<div className='product-card'>
				<div id='' className='scrolling-wrapper'>
					{colors[colorVariant].thumbnails.map((link, pos) => (
						<img key={pos} src={link} alt='' className='thumbnail' />
					))}
				</div>
				<div className='product-details'>
					<h1 className='product-name'>{name}</h1>

					<h2 className='product-price '>
						${numberWithCommas(colors[colorVariant].price)}
					</h2>
					<div className='mt-2.5'>
						{Array.isArray(colors) &&
							colors.length > 0 &&
							colors.map(({ color }, index) => (
								<button
									key={color}
									style={{ backgroundColor: color }}
									onClick={() => setColorVariant(index)}
									className={'color-btn'}
								/>
							))}
					</div>

					<AddToCart
						product={{ colorVariant, ...product }}
						classes='add-to-cart'
					/>
					<Accordion {...configAccordion} />
					<div className='ratings'>
						<h2 className='ratings-title'>Customers reviews</h2>
						<div className='stars-wrapper'>
							<StarRatings
								rating={rating}
								starDimension='24px'
								starSpacing='0px'
								starRatedColor='#413F3C'
								starHoverColor='#413F3C'
								changeRating={(newRating) => setRatings(newRating)}
							/>
							<h3 className='stars-text'>{ratings} out of 5</h3>
						</div>
						<h3 className='ratings-number'>{numberRatings} reviews</h3>
					</div>
				</div>
			</div>
		</WithLoading>
	);
};

export default ProductCard;
