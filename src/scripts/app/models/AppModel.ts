import * as Constants from '../Constants.ts';

export class AppModel {

    constructor() {
    }

    processTimelineData(data: any) {
        const output = {};

        for (const entry of data.entries) {
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

    processTimelineEntryContent(content: string) {

    }

    getEntriesByCategory(key: string, value: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/category/${key}/${value}.json`)
            .then((response) => response.json())
            .then((response) => this.processTimelineData(response));
    }

    getEntriesByTag(tag: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/entries/tag/${tag}.json`)
            .then((response) => response.json())
            .then((response) => this.processTimelineData(response));
    }

    getPages() {
        return fetch(`${Constants.SERVICE_BASE_URL}/pages/index.json`)
            .then((response) => response.json());
    }

    getPageByName(name: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}/pages/name/${name}.json`)
            .then((response) => response.json());
    }

}
