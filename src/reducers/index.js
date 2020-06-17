import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import title from './title';

export default combineReducers({
	alert,
	auth,
	title,
});
