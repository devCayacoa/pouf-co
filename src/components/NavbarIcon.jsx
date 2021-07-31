import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarIcon = ({ icon, link }) => (
	// console.log(icon);
	<Link to={link} className='ml-4'>
		<img src={icon} alt='' className='w-5' />
	</Link>
);

