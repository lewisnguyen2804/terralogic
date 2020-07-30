import { userConstants } from '../constants';

export const uploadImage = (state = {}, action) => {
	switch (action.type) {
		case userConstants.UPLOAD_REQUEST:
			return { 
				uploading: true,
			};
		case userConstants.UPLOAD_SUCCESS:
			return { 
				link: action.link
			};
		case userConstants.UPLOAD_FAILURE:
			return {};
		default:
			return state
	}
}