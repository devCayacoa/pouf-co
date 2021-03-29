import React from 'react';
import { Logo } from './Logo/Logo';
import { NavbarIcon } from './NavbarIcon';
import cart from '../assets/shopping-cart.svg';
import user from '../assets/user.svg';

export const Navbar = () => {
	return (
		<nav className='flex space-betweens w-full' id='navbar'>
			<Logo />
			<div className='flex ml-auto items-center'>
				<NavbarIcon icon={user} link={'/profile'} />
				<NavbarIcon icon={cart} link={'/cart'} />
			</div>
		</nav>
	);
};
