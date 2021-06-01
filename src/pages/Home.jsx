import React from 'react';
import { Hero } from '../components/Hero';
import { SpecialCard } from '../components/SpecialCard';
import { WhatsNew } from '../components/WhatsNew';

export const Home = () => (
	<main id='home-page' className=''>
		<Hero />
		<WhatsNew />
		<SpecialCard />
	</main>
);
