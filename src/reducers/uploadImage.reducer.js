import { userConstants } from '../constants';

export const uploadImage = (state = {}, action) => {
	switch (action.type) {
		case userConstants.IMAGE_UPLOADED:
			return { 
				link: action.link
			};
		default:
			return state
	}
}