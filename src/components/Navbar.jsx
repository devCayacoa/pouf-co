import React, { useContext } from 'react';
import { Logo } from './Logo';
// import { NavbarIcon } from './NavbarIcon';
// import cart from '../assets/shopping-cart.svg';
// import user from '../assets/user.svg';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/utils';
import { useSelector } from 'react-redux';
import { LogOut } from './LogOut';
import { selectCartItemsCount } from '../redux/Cart/cart.selectors';

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	totalItemsInCart: selectCartItemsCount(state),
});

export const Navbar = () => {
	const { currentUser, totalItemsInCart } = useSelector(mapState);

	return (
		<nav className='flex space-betweens w-full' id='navbar'>
			<Logo />
			<ul className='flex ml-auto items-center'>
				<li className='mr-2'>
					<Link to='/cart'>Your Cart ({totalItemsInCart})</Link>
				</li>
				{!currentUser && [
					<li className=''>
						<Link to='/registration'>
							<h1 className='ml-2'>Register</h1>
						</Link>
					</li>,
					<li className=''>
						<Link to='/login'>
							<h1 className='ml-2'>Login</h1>
						</Link>
					</li>,
				]}
				{currentUser && [
					<li className=''>
						<Link to='/dashboard'>
							<h1 className=''>Dashboard</h1>
						</Link>
					</li>,
					<li className=''>
						<LogOut />
					</li>,
				]}
			</ul>
		</nav>
	);
};
