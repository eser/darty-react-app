import { combineReducers } from 'redux';

import { loginReducer } from './login';

export const combinedReducers = combineReducers({
    login: loginReducer
});

export default combinedReducers;
