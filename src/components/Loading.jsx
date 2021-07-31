import { ClockIcon, RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import Modal from './Modal';

const Loading = () => {
	return (
		<div className='fixed inset-0 flex flex-col items-center justify-center bg-white'>
			<div id='' className=''>
				<ClockIcon className='animate-pulse' />
				<span className='font-bold mt-2 text-2xl'>Loading</span>
			</div>
		</div>
	);
	return (
		<Modal>
			<div className='fixed inset-0 flex flex-col items-center justify-center bg-white'>
				<div id='' className=''>
					<ClockIcon className='animate-pulse' />
					<span className='font-bold mt-2 text-2xl'>Loading</span>
				</div>
			</div>
		</Modal>
	);
};

export default Loading;
