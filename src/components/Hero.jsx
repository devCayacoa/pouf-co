import React from 'react';
import poufHero from '../assets/pouf-hero.png';
import ShopNow from './ShopNow';

export const Hero = () => {
	return (
		<section id='hero' className='bg-[#FAECD8] flex justify-start items-center'>
			<img src={poufHero} alt='pouf' className='w-28 h-full' />
			<div className='p-4'>
				<h1 className='font-extrabold text-3xl leading-8'>Cubes Special</h1>
				<h2 className='text-lg mt-0.5 mb-2'>An elegant touch</h2>
				<ShopNow link='/search/?refinementList%5Bcategories%5D%5B0%5D=cube' />
			</div>
		</section>
	);
};
