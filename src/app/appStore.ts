import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import dummyReducer from './reducers/dummy';

const middlewares = [ thunk ];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        timestamp: true,
    });

    middlewares.push(logger);
}

const reducers = combineReducers({
    dummy: dummyReducer,
});

function appStoreCreator(initialState) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./appStore', () => {
            const nextRootReducer = require('./appStore');

            store.replaceReducer(nextRootReducer.reducers);
        });
    }

    return store;
}

export {
    appStoreCreator as default,
    reducers,
};
