import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { reducer, initialState, Context } from './store';

import { Home } from './pages/Home';

import { ProductsContainer } from './components/ProductsContainer';
import { Header } from './components/Header';
import { ProductDetailsContainer } from './components/ProductDetailsContainer';
import { Login } from './pages/Login';
import { auth, handleUserProfile } from './firebase/utils';
import { clearCurrentUser, setCurrentUser } from './store/actions';
import { Registration } from './pages/Registration';
import { Recovery } from './pages/Recovery';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		let authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await handleUserProfile(userAuth);
				userRef.onSnapshot((snapshot) => {
					dispatch(
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					);
				});
				return;
			}
			dispatch(clearCurrentUser());
		});

		return () => {
			authListener();
		};
	}, []);

	return (
		<Context.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<div id='App' className='subpixel-antialiased w-screen'>
					<Header />
					<main className=''>
						<Switch>
							<Route exact path={'/'} component={Home} />
							<Route path='/products' component={ProductsContainer} />
							<Route
								path={'/product/:productId'}
								component={ProductDetailsContainer}
							/>
							<Route
								path={'/login'}
								render={() =>
									state.currentUser ? <Redirect to='/' /> : <Login />
								}
							/>
							<Route
								path='/registration'
								render={() =>
									state.currentUser ? <Redirect to='/' /> : <Registration />
								}
							/>
							<Route path='/recovery' component={Recovery} />
						</Switch>
					</main>
					{/* <Footer /> */}
				</div>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
