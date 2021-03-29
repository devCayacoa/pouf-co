import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store';
import { ProductDetails } from './ProductDetails';

export const ProductDetailsContainer = ({ match }) => {
	const {
		params: { productId },
	} = match;

	const { state, dispatch } = useContext(Context);
	const [productData, setProductData] = useState(
		state.products.filter((elem) => elem.id === productId)[0]
	);
	const [loading, setLoading] = useState(true);

	return <ProductDetails productData={productData} />;
};
