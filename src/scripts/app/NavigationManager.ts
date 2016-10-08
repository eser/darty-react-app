import { Services } from './utils/Services.ts';

import { PageModel } from './Main/models/PageModel.ts';

export enum PageTypes {
    None,
    Page
}

export class Page {

    type: PageTypes;
    parameters: any;

    constructor(type: PageTypes, parameters: any) {
        this.type = type;
        this.parameters = parameters;
    }

}

export class NavigationManager {

    static identify(url: string) {
        if (url.substring(0, 8) == '#/pages/') {
            return new Page(
                PageTypes.Page,
                {
                    page: decodeURIComponent(url.substring(8))
                }
            );
        }

        return new Page(PageTypes.None, null);
    }

    static getUrl(page: Page) {
        if (page.type === PageTypes.Page) {
            return `/pages/${encodeURIComponent(page.parameters.page)}`;
        }

        return null;
    }

    static prefetch(page: Page) {
        if (page.type === PageTypes.Page) {
            const model = Services.get(PageModel);

            model.getPageByName(page.parameters.page);
        }
    }

    static prefetchUrl() {
        const url = location.hash,
            page = this.identify(url);

        this.prefetch(page);
    }

}
