const { userTypes } = require('./user.types');

const INITIAL_STATE = {
	currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case userTypes.SET_CURRENT_USER:
			return { ...state, currentUser: payload };
		case userTypes.CLEAR_CURRENT_USER:
			return { ...state, currentUser: null };
		default:
			return state;
	}
};
