import AppContainer from './app/appContainer';
import appStoreCreator from './app/appStore';

export default function startup(args) {
    return {
        '/': { app: AppContainer, store: appStoreCreator, state: {} },
    };
}
