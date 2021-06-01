import { all, call, takeLatest, put } from 'redux-saga/effects';
import {
	auth,
	getCurrentUser,
	GoogleProvider,
	handleUserProfile,
} from '../../firebase/utils';
import { setLoading } from '../UI/UI.actions';

import {
	resetPasswordSuccess,
	signInSuccess,
	signOutUserSuccess,
	userError,
} from './user.actions';

import { handleResetPasswordAPI } from './user.helpers';
import {
	CHECK_USER_SESSION,
	EMAIL_SIGN_IN_START,
	GOOGLE_SIGN_IN_START,
	RESET_PASSWORD_START,
	SIGN_OUT_USER_START,
	SIGN_UP_USER_START,
} from './user.types';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
	try {
		const userRef = yield call(handleUserProfile, {
			userAuth: user,
			additionalData,
		});
		const snapshot = yield userRef.get();
		yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
	} catch (error) {
		console.log(error);
	}
}

export function* emailSignIn({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		console.log(error.message);
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
	yield put(setLoading(true));
	try {
		const userAuth = yield getCurrentUser();
		if (userAuth) yield getSnapshotFromUserAuth(userAuth);
		yield put(setLoading(false));
	} catch (error) {
		// console.log(error.message)
	}
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
	// yield put(setLoading(true));
	try {
		yield auth.signOut();
		yield put(signOutUserSuccess());
		// yield put(setLoading(false));
	} catch (error) {
		// console.log(error.message)
	}
}

export function* onSignOutUserStart() {
	yield takeLatest(SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
	payload: { displayName, email, password, confirmPassword },
}) {
	if (password !== confirmPassword) {
		const error = ["Passwords don't match"];
		yield put(userError(error));
		return;
	}
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user, { displayName });
	} catch (error) {
		yield put(userError([error.message]));
		// console.log(error.message);
	}
}

export function* onSignUpUserStart() {
	yield takeLatest(SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({ payload: { email } }) {
	try {
		yield call(handleResetPasswordAPI, email);
		yield put(resetPasswordSuccess());
	} catch (error) {
		yield put(userError(error));
		// console.log(error.message)
	}
}

export function* onResetPasswordStart() {
	yield takeLatest(RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
	try {
		const { user } = yield auth.signInWithPopup(GoogleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		// console.log(error)
	}
}
export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, googleSignIn);
}

export default function* userSagas() {
	yield all([
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutUserStart),
		call(onSignUpUserStart),
		call(onResetPasswordStart),
		call(onGoogleSignInStart),
	]);
}
