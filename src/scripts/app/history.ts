declare var require: Function;

import { useRouterHistory } from 'react-router';

export enum HistoryType {
    Hash,
    DOM,
    Browser,
    Memory
};

export class History {
    create(type: HistoryType): any {
        switch (type) {
            case HistoryType.Hash:
                const hashHistory = require('history/lib/createHashHistory');

                return useRouterHistory(hashHistory)({
                    queryKey: false
                });

            case HistoryType.DOM:
                const DOMHistory = require('history/lib/createDOMHistory');

                return useRouterHistory(DOMHistory)();

            case HistoryType.Browser:
                const browserHistory = require('history/lib/createBrowserHistory');

                return useRouterHistory(browserHistory)();

            case HistoryType.Memory:
                const memoryHistory = require('history/lib/createMemoryHistory');

                return useRouterHistory(memoryHistory)();
        }
    }
}

export const history = new History();

export default history;
