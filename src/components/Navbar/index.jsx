import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from '../Logo';

// import { NavbarIcon } from './NavbarIcon';
// import cart from '../assets/shopping-cart.svg';
// import user from '../assets/user.svg';
import { LogOut } from '../LogOut';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

import {
	SearchIcon,
	MenuIcon,
	ShoppingCartIcon,
	ArrowLeftIcon,
} from '@heroicons/react/outline';

import { openMenu } from '../../redux/UI/UI.actions';

import './Navbar.styles.css';

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	totalItemsInCart: selectCartItemsCount(state),
});

export const Navbar = () => {
	const { currentUser, totalItemsInCart } = useSelector(mapState);
	const location = useLocation();
	const history = useHistory();

	const dispatch = useDispatch();

	return (
		<nav
			className='flex justify-between items-center w-full shadow-xl'
			id='navbar'
		>
			<div className='flex items-center'>
				{location.pathname != '/' && (
					<button className='' onClick={() => history.goBack()}>
						<ArrowLeftIcon className='nav-icon mr-2' />
					</button>
				)}
				<button className='' onClick={() => dispatch(openMenu())}>
					<MenuIcon className='nav-icon' />
				</button>
			</div>
			<Logo />
			<ul className='flex items-center'>
				<li className='mr-2'>
					<Link to='/cart'>
						<div className='flex justify-start items-center'>
							<ShoppingCartIcon className='nav-icon ' />
							<span className='font-bold'>{totalItemsInCart}</span>
						</div>
					</Link>
				</li>
				<li className=''>
					<SearchIcon className='nav-icon' />
				</li>

				{/* {!currentUser && [
					<li key='1' className=''>
						<Link to='/registration'>
							<h1 className='ml-2'>Register</h1>
						</Link>
					</li>,
					<li key='2' className=''>
						<Link to='/login'>
							<h1 className='ml-2'>Login</h1>
						</Link>
					</li>,
				]}
				{currentUser && [
					<li key='1' className=''>
						<Link to='/dashboard'>
							<h1 className=''>Dashboard</h1>
						</Link>
					</li>,
					<li key='2' className=''>
						<LogOut />
					</li>,
				]} */}
			</ul>
		</nav>
	);
};
