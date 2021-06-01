import { CLOSE_MENU, OPEN_MENU, SET_LOADING } from './UI.types';

const initialState = { loading: true, isMenuOpen: false };

const UIReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return { ...state, loading: payload };

		case OPEN_MENU:
			return { ...state, isMenuOpen: true };
		case CLOSE_MENU:
			return { ...state, isMenuOpen: false };

		default:
			return state;
	}
};

export default UIReducer;
