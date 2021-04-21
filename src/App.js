import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import WithAuth from './hoc/WithAuth';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import Dashboard from './pages/Dashboard';
import { Recovery } from './pages/Recovery';

import { Header } from './components/Header';
import { checkUserSession } from './redux/User/user.actions';
import { Admin } from './pages/Admin';
import WithAdminAuth from './hoc/WithAdminAuth';
import { AdminToolbar } from './components/AdminToolbar';
import { Search } from './pages/Search';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<div id='App' className='subpixel-antialiased w-screen'>
			<AdminToolbar />
			<Header />
			<main className=''>
				<Switch>
					<Route exact path={'/'} component={Home} />
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
					<Route
						path='/admin'
						render={() => (
							<WithAdminAuth>
								<Admin />
							</WithAdminAuth>
						)}
					/>
					<Route exact path={'/search'} component={Search} />{' '}
					<Route exact path={'/search/:filterType'} component={Search} />{' '}
				</Switch>
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
