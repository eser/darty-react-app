import * as constants from '../../constants';

const initialState = {
    userLevel: constants.UserLevels.Visitor
};

export type loginActions = 'LOGIN';

export const loginReducer = (state = initialState, action: { type: loginActions }) => {
    switch (action.type) {
    case 'LOGIN':
        return Object.assign({}, state, { userLevel: constants.UserLevels.Editor });
    default:
        return state
    }
};
