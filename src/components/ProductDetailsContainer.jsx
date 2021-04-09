import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ProductDetails } from './ProductDetails';

export const ProductDetailsContainer = () => {
	// * Old way
	// const {
	// 	params: { productId },
	// } = match;
	// let { productId } = useParams();
	// const { products } = useContext(Context).state;
	// const product = products.filter((elem) => elem.id === productId)[0];
	// console.log(product);
	// return <ProductDetails product={product} />;
};
