import { combineReducers } from 'redux';
import { reducer as homeReducer } from 'pages/Home';

export default combineReducers({ home: homeReducer });
