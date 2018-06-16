import { ServiceLifetime, ServiceManager } from 'servicemanager';

import DummyService from './pages/dummy/dummyService';

const appContext = new ServiceManager();

appContext.set('dummyService', () => new DummyService(), ServiceLifetime.Transient);

export {
    appContext as default,
};
