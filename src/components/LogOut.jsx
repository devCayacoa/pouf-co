import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../redux/User/user.actions';

export const LogOut = () => {
	const dispatch = useDispatch();
	const signOut = () => dispatch(signOutUserStart());
	return (
		<h1 className='ml-2' onClick={signOut}>
			Logout
		</h1>
	);
};
