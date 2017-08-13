import { ServiceLifetime, ServiceManager } from 'servicemanager/lib/esm';
import { CacheManager } from 'es6-cachemanager/lib/esm';
import { EventManager } from 'react-eventmanager/lib/esm';

import { PageService } from './modules/pages/pageService';
import { SessionService } from './modules/shared/sessionService';

const appContext = new ServiceManager();

appContext.set('cacheManager', new CacheManager(), ServiceLifetime.Singleton);
appContext.set('eventManager', new EventManager(), ServiceLifetime.Singleton);

appContext.set('pageService', () => new PageService(), ServiceLifetime.Transient);
appContext.set('sessionService', new SessionService(), ServiceLifetime.Singleton);

export {
    appContext,
};

export default appContext;
