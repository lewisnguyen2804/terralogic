import { userConstants } from '../constants';

export function logged(state = {}, action) {
	switch (action.type) {
		case userConstants.LOGGED_USER:
			return {
				loggedIn: true,
				userLogged: action.user
			};
		default:
			return state
	}
}