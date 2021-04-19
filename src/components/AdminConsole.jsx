import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { AddNewProduct } from './AddNewProduct';
import { AdminProducts } from './AdminProducts';

export const AdminConsole = () => {
	const { url } = useRouteMatch();
	const { displayName } = useSelector((state) => state.user.currentUser);

	return (
		<div className='' id='admin-console'>
			{displayName}
			<Link to={url + '/products'}>Products</Link>
			<Switch>
				<Route path={url + '/products'} component={AdminProducts} />
				<Route path={url + '/add-new'} component={AddNewProduct} />
			</Switch>
		</div>
	);
};
