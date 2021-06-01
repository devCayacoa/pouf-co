import React from 'react';
import { Link } from 'react-router-dom';

export const WhatsNew = () => {
	const cards = [
		{
			thumbnail: 'https://via.placeholder.com/400/7CC1A3/000?Text=PoufCo',
			name: 'Chevron',
		},
		{
			thumbnail: 'https://via.placeholder.com/400/B3B876/000?Text=PoufCo',
			name: 'Fur',
		},
		{
			thumbnail: 'https://via.placeholder.com/400/89D0D5/000?Text=PoufCo',
			name: 'Moroccan',
		},
		{
			thumbnail: 'https://via.placeholder.com/400/F5B0CE/000?Text=PoufCo',
			name: 'Knitted',
		},
	];

	return (
		<section id='whats-new' className='mt-3.5'>
			<h2 className='font-bold text-lg ml-6'>What&apos;s new</h2>
			<div className='scrolling-wrapper mt-2.5 flex flex-nowrap overflow-x-auto pl-3'>
				{cards.map(({ thumbnail, name }, pos) => (
					<Link
						to={`/search/?refinementList%5Bcategories%5D%5B0%5D=${name.toLowerCase()}`}
						key={pos}
						className='mr-4 flex-auto !flex-shrink-0 !flex-grow-0'
					>
						<img
							src={thumbnail}
							alt=''
							className='rounded-lg w-[152px] shadow-card'
						/>
						<p className='text-left font-semibold text-lg'>{name}</p>
					</Link>
				))}
			</div>
		</section>
	);
};
