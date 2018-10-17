function dummyRequestAction(firstNumber: number, secondNumber: number) {
    return (dispatch, getState) => {
        dispatch({
            type: 'DUMMY_REQUEST_ACTION',
        });

        setTimeout(
            () => dispatch({
                type: 'DUMMY_RESULT_ACTION',
                payload: firstNumber + secondNumber,
            }),
            1000,
        );
    };
}

export {
    dummyRequestAction as default,
};
