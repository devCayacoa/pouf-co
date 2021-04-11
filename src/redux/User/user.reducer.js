const { userTypes } = require('./user.types');

const INITIAL_STATE = {
	currentUser: null,

	signInSuccess: false,

	signUpSuccess: false,
	signUpError: [],

	resetPassSuccess: false,
	resetPassError: [],
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	const {
		SET_CURRENT_USER,
		CLEAR_CURRENT_USER,
		SIGN_IN_SUCCESS,
		SIGN_UP_ERROR,
		SIGN_UP_SUCCESS,
		RESET_PASS_ERROR,
		RESET_PASS_SUCCESS,
		RESET_AUTH_FORMS,
	} = userTypes;
	switch (type) {
		case SET_CURRENT_USER:
			return { ...state, currentUser: payload };
		case CLEAR_CURRENT_USER:
			return { ...state, currentUser: null };

		case SIGN_IN_SUCCESS:
			return { ...state, signInSuccess: payload };

		case SIGN_UP_SUCCESS:
			return { ...state, signUpSuccess: payload };
		case SIGN_UP_ERROR:
			return { ...state, signUpError: payload };

		case RESET_PASS_SUCCESS:
			return { ...state, resetPassSuccess: payload };
		case RESET_PASS_ERROR:
			return { ...state, resetPassError: payload };

		case RESET_AUTH_FORMS:
			return {
				...state,
				signInSuccess: false,

				signUpSuccess: false,
				signUpError: [],

				resetPassSuccess: false,
				resetPassError: [],
			};
		default:
			return state;
	}
};
