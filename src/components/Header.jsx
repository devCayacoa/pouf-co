import React from 'react';
import { Navbar } from './Navbar';

export const Header = () => {
	return (
		<header
			id='header'
			className='px-4 py-3 shadow sticky top-0 left-0 bg-white'>
			<Navbar />
		</header>
	);
};
