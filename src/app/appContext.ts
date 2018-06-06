import { ServiceLifetime, ServiceManager } from 'servicemanager';

import PageService from './modules/pages/pageService';
import SessionService from './modules/shared/sessionService';

const appContext = new ServiceManager();

appContext.set('pageService', () => new PageService(), ServiceLifetime.Transient);
appContext.set('sessionService', new SessionService(), ServiceLifetime.Singleton);

export {
    appContext as default,
};
