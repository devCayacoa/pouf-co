import { auth } from '../../firebase/utils';

export const handleResetPasswordAPI = (email) => {
	const config = {
		url: process.env.REACT_APP_URL + 'login',
	};
	return new Promise((resolve, reject) => {
		auth
			.sendPasswordResetEmail(email, config)
			.then(() => resolve())
			.catch(() => reject(['Email not found, Please try again.']));
	});
};
