export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

export const setCurrentUser = (payload) => ({
	type: SET_CURRENT_USER,
	payload,
});

export const clearCurrentUser = () => ({ type: CLEAR_CURRENT_USER });
