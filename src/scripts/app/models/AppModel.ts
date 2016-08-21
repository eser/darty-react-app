import { fetch } from 'whatwg-fetch';

import * as Constants from '../Constants.ts';

export class AppModel {

    constructor() {
    }

    getEntriesByCategory(key: string, value: string) {
        return fetch(`${Constants.SERVICE_BASE_URL}//entries/category/${key}/${value}.json`)
            .then((response) => response.json());
    }

}
