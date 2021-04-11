import React, { useContext } from 'react';
import { Logo } from './Logo';
// import { NavbarIcon } from './NavbarIcon';
// import cart from '../assets/shopping-cart.svg';
// import user from '../assets/user.svg';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/utils';
import { useSelector } from 'react-redux';

export const Navbar = () => {
	const currentUser = useSelector((state) => state.user.currentUser);

	return (
		<nav className='flex space-betweens w-full' id='navbar'>
			<Logo />
			<div className='flex ml-auto items-center'>
				{!currentUser && (
					<>
						<Link to='/registration'>
							<h1 className='ml-2'>Register</h1>
						</Link>
						<Link to='/login'>
							<h1 className='ml-2'>Login</h1>
						</Link>
					</>
				)}
				{currentUser && (
					<>
						<Link to='/dashboard'>
							<h1 className=''>Dashboard</h1>
						</Link>
						<h1 className='ml-2' onClick={() => auth.signOut()}>
							Logout
						</h1>
					</>
				)}
			</div>
		</nav>
	);
};
