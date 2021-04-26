import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pouf.svg';

export const Logo = () => (
	<Link to='/'>
		<div className='flex items-start'>
			<img id='logo' src={logo} className='w-8' alt='Logo' />
			<span className='logo-text font-logo italic font-bold text-2xl ml-2'>
				Pouf Co.
			</span>
		</div>
	</Link>
);
