import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductDetailsContainer } from './components/ProductDetailsContainer';
import { reducer, initialState, Context } from './store';
import { Home } from './pages/Home';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route
						path={'/product/:productId'}
						component={ProductDetailsContainer}
					/>
				</Switch>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
