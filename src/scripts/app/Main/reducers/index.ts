import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';

export const combinedReducers = combineReducers({
    login: loginReducer
});

export default combinedReducers;
