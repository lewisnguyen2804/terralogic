import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { logged } from './logged.reducer';
import { uploadImage } from './uploadImage.reducer';
import { update } from './update.reducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	logged,
	uploadImage,
	update
});

export default rootReducer;