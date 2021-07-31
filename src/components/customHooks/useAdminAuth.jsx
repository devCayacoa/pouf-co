import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { checkUserIsAdmin } from '../../utils';

const mapState = ({ user }) => ({ currentUser: user.currentUser });

const useAdminAuth = () => {
	const { currentUser } = useSelector(mapState);
	const history = useHistory();

	useEffect(() => {
		if (!checkUserIsAdmin(currentUser)) {
			history.push('/login');
		}
	}, [currentUser, history]);
	return currentUser;
};

export default useAdminAuth;
