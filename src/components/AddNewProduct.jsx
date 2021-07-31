import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import WithLoading from '../hoc/WithLoading';

import { addNewProductStart } from '../redux/Products/products.actions';

import ProductForm from './ProductForm';

export const AddNewProduct = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = ({ name, colors, categories, tags, description }) => {
		dispatch(
			addNewProductStart({
				name: name.trim(),
				colors: colors.map((colorVariant) => ({
					...colorVariant,
					thumbnails: colorVariant.thumbnails
						.split('\n')
						.map((elem) => elem.trim()),
					price: parseFloat(colorVariant.price),
					categories: colorVariant.categories.map((item) => item.trim()),
				})),
				tags: tags.split(',').map((elem) => elem.trim()),
				description,
			})
		);
		history.goBack();
	};

	return (
		<WithLoading>
			<div className='' id='add-new'>
				<h1 className=''>Add new product</h1>
				<ProductForm submitFunction={handleSubmit} />
			</div>
		</WithLoading>
	);
};
