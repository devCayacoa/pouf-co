const {
	RESET_PASSWORD_SUCCESS,
	USER_ERROR,
	SIGN_OUT_USER_SUCCESS,
	RESET_USER_STATE,
	SIGN_IN_SUCCESS,
} = require('./user.types');

const INITIAL_STATE = {
	currentUser: null,
	resetPasswordSuccess: false,
	userErr: [],
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SIGN_IN_SUCCESS:
			return { ...state, currentUser: payload, userErr: [] };
		case RESET_USER_STATE:
		case SIGN_OUT_USER_SUCCESS:
			return { ...INITIAL_STATE };
		case RESET_PASSWORD_SUCCESS:
			return { ...state, resetPasswordSuccess: payload };
		case USER_ERROR:
			return { ...state, userErr: payload };

		default:
			return state;
	}
};
