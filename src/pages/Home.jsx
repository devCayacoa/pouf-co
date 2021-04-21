import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<main id='home-page' className='p-4'>
			<Link to='/search'>
				<h1 className='text-xl font-bold text-white p-2 inline-block bg-black rounded'>
					Products
				</h1>
			</Link>
		</main>
	);
};
