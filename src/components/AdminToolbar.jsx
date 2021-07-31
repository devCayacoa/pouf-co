import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from '../utils';

const mapState = ({ user }) => ({
	currentUser: user.currentUser,
});

export const AdminToolbar = () => {
	const { currentUser } = useSelector(mapState);
	const isAdmin = checkUserIsAdmin(currentUser);
	if (!isAdmin) return null;

	return (
		<div className='admin-toolbar text-white flex justify-between w-full h-9 items-center'>
			<h1 className='p-2 font-bold text-white bg-brown text-sm w-full h-full'>
				Welcome, {currentUser.displayName}!
				{/* <span className='text-[9px]'>
						<br />
						ID: {currentUser.id}
					</span> */}
			</h1>
			<Link
				to='/admin'
				className='transition duration-150 hover:bg-blue-600 bg-secondary text-white h-full whitespace-nowrap p-2'
			>
				My admin
			</Link>
		</div>
	);
};
