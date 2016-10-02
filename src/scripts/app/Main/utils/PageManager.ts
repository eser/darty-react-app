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

export class PageManager {

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

}
