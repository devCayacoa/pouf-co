import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../redux/UI/UI.actions';
import SlidingMenuContent from './SlidingMenuContent';

import './SlidingMenu.styles.css';
import { useLocation } from 'react-router';

const mapState = (state) => ({
	open: state.UIData.isMenuOpen,
});

export default function SlidingMenu() {
	const { open } = useSelector(mapState);
	console.log(open);
	const dispatch = useDispatch();
	const { pathname, key } = useLocation();
	useEffect(() => {
		dispatch(closeMenu());
	}, [pathname, key]);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				static
				className='fixed inset-0 overflow-hidden z-40'
				open={open}
				onClose={() => dispatch(closeMenu())}
			>
				<div className='absolute inset-0 overflow-hidden'>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>
					<div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
						<Transition.Child
							as={Fragment}
							enter='transform transition ease-in-out duration-500 sm:duration-700'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transform transition ease-in-out duration-500 sm:duration-700'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'
						>
							<div className='relative w-screen max-w-md'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-500'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-500'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 h-full'>
										<button
											className='rounded-md text-gray-400 hover:text-white focus:outline-none'
											onClick={() => dispatch(closeMenu())}
										>
											<span className='sr-only'>Close panel</span>
											<XIcon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>
								</Transition.Child>

								<div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
									<SlidingMenuContent />
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
