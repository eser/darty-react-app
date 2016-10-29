export interface NavigationItemInterface {

    resolver: (url: string) => any;
    builder: (parameters: any) => string;
    prefetcher: (parameters: any) => void;

}

export class NavigationResult {

    navigationItem: NavigationItemInterface;
    parameters: any;

    constructor(navigationItem: NavigationItemInterface, parameters: any) {
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

    items: Map<string, NavigationItemInterface>;

    constructor() {
        this.items = new Map<string, NavigationItemInterface>();
    }

    add(key: string, navigationItem: NavigationItemInterface): void {
        this.items[key] = navigationItem;
    }

    addRange(navigationItems: Map<string, NavigationItemInterface>): void {
        for (const [ key, value ] of navigationItems) {
            this.add(key, value);
        }
    }

    identify(url: string): NavigationResult | null {
        for (const [ key, value ] of this.items) {
            const result = value.resolver(url);

            if (result !== null) {
                return new NavigationResult(value, result);
            }
        }

        return null;
    }

    getUrl(name: string, parameters: any): string {
        return this.items[name].builder(parameters);
    }

    prefetchUrl(url: string): void {
        const item = this.identify(url);

        if (item !== null) {
            item.prefetch();
        }
    }

}

export default NavigationManager;
