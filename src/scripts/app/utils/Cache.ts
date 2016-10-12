export class Cache {

    items: { [key: string]: any };

    constructor() {
        this.items = {};
    }

    serializeKey(key): string {
        if (key.constructor === Array) {
            return key.join('_');
        }

        return key;
    }

    set(key, promise): void {
        this.items[this.serializeKey(key)] = promise;
    }

    get(key): any {
        return this.items[this.serializeKey(key)];
    }

}
