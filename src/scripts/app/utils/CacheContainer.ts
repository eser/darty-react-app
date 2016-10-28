export class CacheContainer {

    items: Map<string, any>;

    constructor() {
        this.items = new Map<string, any>();
    }

    serializeKey(key): string {
        if (Array.isArray(key)) {
            return key.join('_');
        }

        return key;
    }

    set(key, value): void {
        this.items[this.serializeKey(key)] = value;
    }

    get(key): any {
        return this.items[this.serializeKey(key)];
    }

}

export default CacheContainer;
