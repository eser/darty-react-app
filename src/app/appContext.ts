import { ServiceLifetime, ServiceManager } from 'servicemanager';

import PageService from './pages/pages/pageService';
import SessionService from './pages/shared/sessionService';

const appContext = new ServiceManager();

appContext.set('pageService', () => new PageService(), ServiceLifetime.Transient);
appContext.set('sessionService', new SessionService(), ServiceLifetime.Singleton);

export {
    appContext as default,
};
