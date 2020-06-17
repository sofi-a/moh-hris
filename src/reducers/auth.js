import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const remember = JSON.parse(localStorage.getItem('remember'));
const isAuthenticated = (!user || !remember) ? false : true;

const initialState = {
	user,
	isAuthenticated,
	remember,
	loading: true,	
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload.user,
				remember: payload.remember,
			};
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT:
			return {
				user: null,
				remember: false,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}
