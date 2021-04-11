import { useDispatch } from 'react-redux';
import { auth, GoogleProvider, handleUserProfile } from '../../firebase/utils';
import { userTypes } from './user.types';

export const setCurrentUser = (payload) => ({
	type: userTypes.SET_CURRENT_USER,
	payload,
});

export const clearCurrentUser = () => ({ type: userTypes.CLEAR_CURRENT_USER });

export const resetAuthForms = () => ({ type: userTypes.RESET_AUTH_FORMS });

export const signInUser = ({ email, password }) => async (dispatch) => {
	try {
		auth.signInWithEmailAndPassword(email, password);
		dispatch({
			type: userTypes.SIGN_IN_SUCCESS,
			payload: true,
		});
	} catch (error) {
		console.log(error.message);
	}
};

export const signInWithGoogle = () => async (dispatch) => {
	try {
		await auth.signInWithPopup(GoogleProvider).then(() =>
			dispatch({
				type: userTypes.SIGN_IN_SUCCESS,
				payload: true,
			})
		);
	} catch (error) {
		// console.log(error)
	}
};

export const signUpUser = ({
	displayName,
	email,
	password,
	confirmPassword,
}) => async (dispatch) => {
	if (password !== confirmPassword) {
		const error = ["Passwords don't match"];
		dispatch(signUpError(error));
		return;
	}
	try {
		const { user } = await auth
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				dispatch(signUpError([error.message]));
			});
		await handleUserProfile(user, { displayName });
		dispatch({ type: userTypes.SIGN_UP_SUCCESS, payload: true });
	} catch (error) {
		console.log(error.message);
	}
};

export const resetPassword = ({ email }) => async (dispatch) => {
	try {
		const config = {
			url: process.env.REACT_APP_URL + 'login',
		};
		await auth.sendPasswordResetEmail(email, config);
		dispatch({ type: userTypes.RESET_PASS_SUCCESS, payload: true });
	} catch (error) {
		dispatch({ type: userTypes.RESET_PASS_ERROR, payload: [error.message] });
	}
};

const signUpError = (payload) => ({ type: userTypes.SIGN_UP_ERROR, payload });
