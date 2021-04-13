import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import { auth, handleUserProfile } from './firebase/utils';

import WithAuth from './hoc/WithAuth';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import Dashboard from './pages/Dashboard';
import { Recovery } from './pages/Recovery';

import { ProductsContainer } from './components/ProductsContainer';
import { Header } from './components/Header';
import { ProductDetailsContainer } from './components/ProductDetailsContainer';
import { checkUserSession } from './redux/User/user.actions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<div id='App' className='subpixel-antialiased w-screen'>
			<Header />
			<main className=''>
				<Switch>
					<Route exact path={'/'} component={Home} />
					{/* <Route path='/products' component={ProductsContainer} /> */}
					{/* <Route
						path={'/product/:productId'}
						component={ProductDetailsContainer}
					/> */}
					<Route path={'/login'} render={() => <Login />} />
					<Route path='/registration' render={() => <Registration />} />
					<Route path='/recovery' component={Recovery} />
					<Route
						path='/dashboard'
						render={() => (
							<WithAuth>
								<Dashboard />
							</WithAuth>
						)}
					/>
				</Switch>
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
