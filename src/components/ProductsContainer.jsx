import React, { useContext } from 'react';
import { Products } from './Products';

import { Context } from '../store';

export const ProductsContainer = () => {
	console.log(Context.state);
	const { state, dispatch } = useContext(Context);

	return <Products products={state.products} />;
};
