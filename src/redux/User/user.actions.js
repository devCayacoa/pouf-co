import {
	CHECK_USER_SESSION,
	EMAIL_SIGN_IN_START,
	GOOGLE_SIGN_IN_START,
	RESET_PASSWORD_START,
	RESET_PASSWORD_SUCCESS,
	RESET_USER_STATE,
	SIGN_IN_SUCCESS,
	SIGN_OUT_USER_START,
	SIGN_OUT_USER_SUCCESS,
	SIGN_UP_USER_START,
	USER_ERROR,
} from './user.types';

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userCredentials) => ({
	type: EMAIL_SIGN_IN_START,
	payload: userCredentials,
});

export const signInSuccess = (userData) => ({
	type: SIGN_IN_SUCCESS,
	payload: userData,
});

export const checkUserSession = () => ({ type: CHECK_USER_SESSION });

export const signOutUserStart = () => ({ type: SIGN_OUT_USER_START });

export const signOutUserSuccess = () => ({
	type: SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userDataFromForm) => ({
	type: SIGN_UP_USER_START,
	payload: userDataFromForm,
});

export const userError = (error) => ({
	type: USER_ERROR,
	payload: error,
});

export const resetPasswordStart = (email) => ({
	type: RESET_PASSWORD_START,
	payload: email,
});

export const resetPasswordSuccess = (wasSuccessful = true) => ({
	type: RESET_PASSWORD_SUCCESS,
	payload: wasSuccessful,
});

export const resetUserState = () => ({ type: RESET_USER_STATE });
