declare var process: any;

import cacheManager from 'es6-cachemanager/lib/esm';

class PageService {
    async getEntriesByProperty(property: string, value: string): Promise<any> {
        return await fetch(`${process.env.SERVICE_URL}/entries/properties/${encodeURIComponent(property)}/${encodeURIComponent(value)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });
    }

    async getEntriesByTag(tag: string): Promise<any> {
        return await fetch(`${process.env.SERVICE_URL}/entries/tags/${encodeURIComponent(tag)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });
    }

    async getPages(): Promise<any> {
        return await fetch(`${process.env.SERVICE_URL}/pages/index.json`)
            .then((response) => response.json())
            .then((response) => {
                response.pages = this.processPagesListData(response.pages);

                return response;
            });
    }

    async getPageByNameFetch(name: string): Promise<any> {
        // console.log('fetch', name);
        const promise: Promise<any> = fetch(`${process.env.SERVICE_URL}/pages/names/${encodeURIComponent(name)}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });

        // cacheManager.setDirect([ 'pageByName', name ], promise);

        return await promise;
    }

    async getPageByName(name: string): Promise<any> {
        return await cacheManager.get(
            [ 'pageByName', name ],
            () => this.getPageByNameFetch(name),
        );
    }

    processEntriesTimelineData(data: any): Map<string, any> {
        const output = new Map<string, any>();

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

    processPagesListData(data: any): Map<string, any> {
        const output = new Map<string, any>();

        for (const page of data) {
            if (output[page.type] === undefined) {
                output[page.type] = [];
            }

            output[page.type].push(page);
        }

        return output;
    }
}

export {
    PageService as default,
};
