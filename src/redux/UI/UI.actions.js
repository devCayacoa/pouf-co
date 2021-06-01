import { CLOSE_MENU, OPEN_MENU, SET_LOADING } from './UI.types';

export const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
});

export const openMenu = () => ({
	type: OPEN_MENU,
});

export const closeMenu = () => ({
	type: CLOSE_MENU,
});
