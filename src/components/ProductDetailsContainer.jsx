import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store';
import { ProductDetails } from './ProductDetails';

export const ProductDetailsContainer = ({ match }) => {
	// const {
	// 	params: { productId },
	// } = match;
	let { productId } = useParams();
	const { products } = useContext(Context).state;
	const product = products.filter((elem) => elem.id === productId)[0];
	console.log(product);
	// const [loading, setLoading] = useState(true);

	return <ProductDetails product={product} />;
};
