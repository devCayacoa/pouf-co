import { userTypes } from './user.types';

export const setCurrentUser = (payload) => ({
	type: userTypes.SET_CURRENT_USER,
	payload,
});

export const clearCurrentUser = () => ({ type: userTypes.CLEAR_CURRENT_USER });
