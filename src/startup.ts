import AppContainer from './app/appContainer';
import appStoreCreator from './app/appStore';

const appMapping = {
    '/': { app: AppContainer, store: appStoreCreator, state: {} },
};

export {
    appMapping as default,
};
