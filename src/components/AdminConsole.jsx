import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { AddNewProduct } from './AddNewProduct';
import { AdminProducts } from './AdminProducts';
import UpdateProduct from './UpdateProduct';

export const AdminConsole = () => {
	const { url } = useRouteMatch();
	const { displayName } = useSelector((state) => state.user.currentUser);

	return (
		<div className='px-4' id='admin-console'>
			<Switch>
				<Route
					exact
					path={url}
					render={() => (
						<>
							<h2 className='mt-10 text-lg font-semibold'>
								Welcome, {displayName}!
							</h2>
							<h1 className='text-2xl font-semibold mt-4'>Pouf Co.</h1>
							<Link
								to={`${url}/products`}
								className='text-secondary font-medium mt-3 block'
							>
								Store products
							</Link>
						</>
					)}
				/>
				<Route path={`${url}/products`} component={AdminProducts} />
				<Route path={`${url}/add-new`} component={AddNewProduct} />
				<Route path={`${url}/edit/:productId`} component={UpdateProduct} />
			</Switch>
		</div>
	);
};
