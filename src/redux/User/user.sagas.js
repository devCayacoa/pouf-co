import { all, call, takeLatest, put } from 'redux-saga/effects';
import {
	auth,
	getCurrentUser,
	GoogleProvider,
	handleUserProfile,
} from '../../firebase/utils';
import {
	resetPasswordSuccess,
	signInSuccess,
	signOutUserSuccess,
	userError,
} from './user.actions';
import { handleResetPasswordAPI } from './user.helpers';
import { userTypes } from './user.types';

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
	yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
	console.log('Checking user auth');
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		// console.log(error.message)
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
	try {
		yield auth.signOut();
		yield put(signOutUserSuccess());
	} catch (error) {
		// console.log(error.message)
	}
}

export function* onSignOutUserStart() {
	yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
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
	yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
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
	yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
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
	yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
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
