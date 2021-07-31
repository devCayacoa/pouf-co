import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const mapState = ({ user }) => ({
	currentUser: user.currentUser,
});

const useAuth = () => {
	const history = useHistory();
	const { currentUser } = useSelector(mapState);
	useEffect(() => {
		if (!currentUser) {
			history.push('/login');
		}
		return () => {};
	}, [currentUser, history]);
	return currentUser;
};

export default useAuth;
