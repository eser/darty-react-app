import { combineReducers } from 'redux';

import { loginReducer } from './Shared/flow/loginReducer';

export const combinedReducers = combineReducers({
    login: loginReducer
});
