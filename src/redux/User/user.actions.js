import { userTypes } from './user.types';

export const googleSignInStart = () => ({
	type: userTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userCredentials) => ({
	type: userTypes.EMAIL_SIGN_IN_START,
	payload: userCredentials,
});

export const signInSuccess = (userData) => ({
	type: userTypes.SIGN_IN_SUCCESS,
	payload: userData,
});

export const checkUserSession = () => ({ type: userTypes.CHECK_USER_SESSION });

export const signOutUserStart = () => ({ type: userTypes.SIGN_OUT_USER_START });

export const signOutUserSuccess = () => ({
	type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userDataFromForm) => ({
	type: userTypes.SIGN_UP_USER_START,
	payload: userDataFromForm,
});

export const userError = (error) => ({
	type: userTypes.USER_ERROR,
	payload: error,
});

export const resetPasswordStart = (email) => ({
	type: userTypes.RESET_PASSWORD_START,
	payload: email,
});

export const resetPasswordSuccess = (wasSuccessful = true) => ({
	type: userTypes.RESET_PASSWORD_SUCCESS,
	payload: wasSuccessful,
});

export const resetUserState = () => ({ type: userTypes.RESET_USER_STATE });
