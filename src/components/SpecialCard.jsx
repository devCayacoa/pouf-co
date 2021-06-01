import React from 'react';
import ShopNow from './ShopNow';

export const SpecialCard = () => {
	return (
		<section
			id='special'
			className='bg-[#D1E2F9] rounded-lg px-3 mx-3.5 mt-3 flex justify-start items-center'
		>
			<img
				src={'https://via.placeholder.com/400/F5B0CE/000?Text=PoufCo'}
				alt='pouf'
				className='w-20 h-full'
			/>
			<div className='p-4'>
				<h1 className='font-extrabold text-3xl leading-8'>Chevrons Special</h1>
				<h2 className='text-lg mt-0.5 mb-2'>There&apos;s fun in geometry</h2>
				<ShopNow link='/search/?refinementList%5Bcategories%5D%5B0%5D=chevron' />
			</div>
		</section>
	);
};
