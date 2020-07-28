import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { logged } from './logged.reducer';
import { uploadImage } from './uploadImage.reducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	logged,
	uploadImage
});

export default rootReducer;