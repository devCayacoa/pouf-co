const { userTypes } = require('./user.types');

const INITIAL_STATE = {
	currentUser: null,
	resetPasswordSuccess: false,
	userErr: [],
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	const {
		SET_CURRENT_USER,
		CLEAR_CURRENT_USER,
		SIGN_IN_SUCCESS,
		SIGN_OUT_USER_SUCCESS,
		USER_ERROR,
		RESET_PASSWORD_SUCCESS,
		RESET_USER_STATE,
	} = userTypes;

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
