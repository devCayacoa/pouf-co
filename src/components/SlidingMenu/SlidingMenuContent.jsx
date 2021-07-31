import { Dialog } from '@headlessui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';
import { categoriesValues } from '../../utils';
import Accordion from '../Accordion';

const mapState = ({ user }) => ({
	currentUser: user.currentUser,
});

export default function SlidingMenuContent() {
	const { currentUser } = useSelector(mapState);
	const dispatch = useDispatch();

	const isGuest = currentUser ? false : true;

	const signOut = () => dispatch(signOutUserStart());

	const configAccordion = {
		title: 'Categories',
		content: (
			<ul className='accordion-content-ul'>
				{Object.keys(categoriesValues).map((key, pos) => {
					const { name, value } = categoriesValues[key];
					return value !== '' ? (
						<li key={value} className='accordion-content-li'>
							<Link
								key={value}
								to={`/search/?refinementList%5Bcategories%5D%5B0%5D=${value}`}
							>
								{name}
							</Link>
						</li>
					) : (
						<li key={name} className='accordion-content-li'>
							<Link key={value} to='/search'>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		),
		accordionClasses:
			'cursor-pointer w-full outline-none rounded cursor-pointer flex items-center transition-colors duration-150 ease-linear focus:outline-none',
		sectionClasses: 'flex flex-col',
		iconClasses: 'ml-auto transition transform duration-150 ease-linear w-5',
		contentClasses: 'px-2 transition-max-height duration-300 ease-linear',
		activeContentClasses: 'mt-2 overflow-hidden ',
		titleClasses: 'font-medium',
		titleActiveClasses: '',
		rotateClasses: 'transform rotate-180',
		activeClasses: '',
	};

	return (
		<>
			<div className='menu-content'>
				<Dialog.Title className='title'>
					Welcome, {isGuest ? 'Guest' : currentUser.displayName}!
				</Dialog.Title>
				<div className='btn-wrapper'>
					{isGuest ? (
						<>
							<Link to='/registration' className='cta btn mr-2'>
								Sign up
							</Link>
							<Link to='/login' className='btn'>
								Login
							</Link>
						</>
					) : (
						<button className='btn sign-out' onClick={signOut}>
							Sign out
						</button>
					)}
				</div>
			</div>
			<div className='content-wrapper'>
				<div className='content-box'>
					<Link to='/dashboard' className='content-option'>
						Dashboard
					</Link>
					<div className='content-option'>
						<Accordion {...configAccordion} />
					</div>
				</div>
			</div>
		</>
	);
}
