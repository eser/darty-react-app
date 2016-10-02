declare var fetch: Function;

import * as Constants from '../Constants.ts';

import { Cache } from './utils/Cache.ts';

export class AppModel {

    cache: Cache;

    constructor() {
        this.cache = new Cache();
    }

    public getEntriesByProperty(property: string, value: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/properties/${encodeURIComponent(property)}/${encodeURIComponent(value)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            })
            .catch((ex) => {
            });
    }

    public getEntriesByTag(tag: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/tags/${encodeURIComponent(tag)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            })
            .catch((ex) => {
            });
    }

    public getPages() {
        return fetch(`${Constants.SERVICE_BASE_URL}/pages/index.json`)
            .then((response) => response.json())
            .then((response) => {
                response.pages = this.processPagesListData(response.pages);

                return response;
            })
            .catch((ex) => {
            });
    }

    public getPageByNameFetch(name: string) {
        // console.log('fetch', name);
        const promise = fetch(`${Constants.SERVICE_BASE_URL}/pages/names/${encodeURIComponent(name)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            })
            .catch((ex) => {
            });

        this.cache.set([ 'pageByName', name ], promise);

        return promise;
    }

    public getPageByName(name: string) {
        // console.log('get', name);
        return this.cache.get([ 'pageByName', name ]) || this.getPageByNameFetch(name);
    }

    private processEntriesTimelineData(data: any) {
        const output = {};

        for (const entry of data) {
            if (output[entry.properties.year] === undefined) {
                output[entry.properties.year] = { _items: [] };
            }

            if (entry.properties.event === undefined) {
                output[entry.properties.year]._items.push(entry);
                continue;
            }

            if (output[entry.properties.year][entry.properties.event] === undefined) {
                output[entry.properties.year][entry.properties.event] = { _items: [] };
            }

            output[entry.properties.year][entry.properties.event]._items.push(entry);
        }

        return output;
    }


    private processPagesListData(data: any) {
        const output = {};

        for (const page of data) {
            if (output[page.type] === undefined) {
                output[page.type] = [];
            }

            output[page.type].push(page);
        }

        return output;
    }

}
