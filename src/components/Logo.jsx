import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pouf.svg';

export const Logo = () => (
	<Link to='/'>
		<img id='logo' src={logo} className='w-[111px]' alt='Logo' />
	</Link>
);
