const initialState = {
    loading: false,
};

function dummyReducer(state = initialState, message) {
    if (message.type === 'DUMMY_REQUEST_ACTION') {
        return { ...state, loading: true };
    }

    if (message.type === 'DUMMY_RESULT_ACTION') {
        return { ...state, loading: false, result: message.payload };
    }

    return state;
}

export {
    dummyReducer as default,
};
