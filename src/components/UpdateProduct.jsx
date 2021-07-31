import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import {
	fetchProductStart,
	updateProductStart,
} from '../redux/Products/products.actions';

import ProductForm from './ProductForm';

const mapState = ({ productsData }) => ({
	product: productsData.product,
	editedProduct: productsData.editedProduct,
});

function UpdateProduct() {
	const dispatch = useDispatch();
	const { editedProduct } = useSelector(mapState);

	const [view, setView] = useState('form');

	const { productId } = useParams();
	const history = useHistory();

	useEffect(() => {
		dispatch(fetchProductStart(productId));
	}, [productId, dispatch]);

	const handleSubmit = (updatedProduct) => {
		dispatch(updateProductStart(updatedProduct));
		// history.goBack();
	};
	// if (!product.name) return <Loading />;
	return (
		<div className='update-product'>
			<ProductForm
				editedProduct={editedProduct}
				submitFunction={handleSubmit}
			/>
		</div>
	);
}

export default UpdateProduct;
