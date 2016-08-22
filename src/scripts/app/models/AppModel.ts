import * as Constants from '../Constants.ts';

export class AppModel {

    constructor() {
    }

    public getEntriesByCategory(key: string, value: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/categories/${key}/${value}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });
    }

    public getEntriesByTag(tag: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/tags/${tag}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });
    }

    public getPages() {
        return fetch(`${Constants.SERVICE_BASE_URL}/pages/index.json`)
            .then((response) => response.json())
            .then((response) => {
                response.pages = this.processPagesListData(response.pages);

                return response;
            });
    }

    public getPageByName(name: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/pages/names/${name}.json`)
            .then((response) => response.json())
            .then((response) => {
                response.entries = this.processEntriesTimelineData(response.entries);

                return response;
            });
    }

    private processEntriesTimelineData(data: any) {
        const output = {};

        for (const entry of data) {
            if (output[entry.categories.year] === undefined) {
                output[entry.categories.year] = { _items: [] };
            }

            if (entry.categories.event === undefined) {
                output[entry.categories.year]._items.push(entry);
                continue;
            }

            if (output[entry.categories.year][entry.categories.event] === undefined) {
                output[entry.categories.year][entry.categories.event] = { _items: [] };
            }

            output[entry.categories.year][entry.categories.event]._items.push(entry);
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
