import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

import { ProductsContainer } from './components/ProductsContainer';
import { Header } from './components/Header';
import { ProductDetailsContainer } from './components/ProductDetailsContainer';
import { Login } from './pages/Login';
import { auth, handleUserProfile } from './firebase/utils';
import { Registration } from './pages/Registration';
import { Recovery } from './pages/Recovery';
import { connect } from 'react-redux';
import { clearCurrentUser, setCurrentUser } from './redux/User/user.actions';

function App({ currentUser, setCurrentUser, clearCurrentUser }) {
	useEffect(() => {
		let authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await handleUserProfile(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
				});
				return;
			}
			clearCurrentUser();
		});

		return () => {
			authListener();
		};
	}, [setCurrentUser, clearCurrentUser]);

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
					<Route
						path={'/login'}
						render={() => (currentUser ? <Redirect to='/' /> : <Login />)}
					/>
					<Route
						path='/registration'
						render={() =>
							currentUser ? <Redirect to='/' /> : <Registration />
						}
					/>
					<Route path='/recovery' component={Recovery} />
				</Switch>
			</main>
			{/* <Footer /> */}
		</div>
	);
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
