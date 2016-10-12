export class NavigationItem {

    resolver: (url: string) => { [key: string]: string };
    builder: (parameters: { [key: string]: string }) => string;
    prefetcher: (parameters: { [key: string]: string }) => void;

}

export class NavigationResult {

    navigationItem: NavigationItem;
    parameters: { [key: string]: string };

    constructor(navigationItem: NavigationItem, parameters: { [key: string]: string }) {
        this.navigationItem = navigationItem;
        this.parameters = parameters;
    }

    getUrl(): string {
        return this.navigationItem.builder(this.parameters);
    }

    prefetch(): void {
        this.navigationItem.prefetcher(this.parameters);
    }

}

export class NavigationManager {

    items: { [key: string]: NavigationItem };

    constructor() {
        this.items = {};
    }

    add(key: string, navigationItem: NavigationItem): void {
        this.items[key] = navigationItem;
    }

    addRange(navigationItems: { [key: string]: NavigationItem }): void {
        for (const navigationItemKey in navigationItems) {
            this.add(navigationItemKey, navigationItems[navigationItemKey]);
        }
    }

    identify(url: string): NavigationResult {
        for (const itemKey in this.items) {
            const item = this.items[itemKey],
                result = item.resolver(url);

            if (result !== null) {
                return new NavigationResult(item, result);
            }
        }

        return null;
    }

    getUrl(name: string, parameters: { [key: string]: string }): string {
        return this.items[name].builder(parameters);
    }

    prefetchUrl(url: string): void {
        const item = this.identify(url);

        if (item !== null) {
            item.prefetch();
        }
    }

}
