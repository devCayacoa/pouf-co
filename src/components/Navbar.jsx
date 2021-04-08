import React, { useContext } from 'react';
import { Logo } from './Logo';
// import { NavbarIcon } from './NavbarIcon';
// import cart from '../assets/shopping-cart.svg';
// import user from '../assets/user.svg';
import { Link } from 'react-router-dom';
import { Context } from '../store';
import { auth } from '../firebase/utils';

export const Navbar = () => {
	const { state } = useContext(Context);
	const currentUser = state.currentUser;

	return (
		<nav className='flex space-betweens w-full' id='navbar'>
			<Logo />
			<div className='flex ml-auto items-center'>
				{!currentUser && (
					<>
						<Link to='/registration'>
							<h1>Register</h1>
						</Link>
						<Link to='/login'>
							<h1 className='ml-2'>Login</h1>
						</Link>
					</>
				)}
				{currentUser && (
					<h1 className='ml-2' onClick={() => auth.signOut()}>
						Logout
					</h1>
				)}
				{/* <NavbarIcon icon={user} link={'/pouf-co/login'} /> */}
				{/* <NavbarIcon icon={cart} link={'/pouf-co/cart'} /> */}
			</div>
		</nav>
	);
};
