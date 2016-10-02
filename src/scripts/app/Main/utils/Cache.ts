declare var global: any;

export class Cache {

    static assign() {
        if (global.appCache === undefined) {
            global.appCache = new Cache();
        }

        return global.appCache;
    }

    items: any;

    constructor() {
        this.items = {};
    }

    public serializeKey(key) {
        if (key.constructor === Array) {
            return key.join('_');
        }

        return key;
    }

    public set(key, promise) {
        this.items[this.serializeKey(key)] = promise;
    }

    public get(key) {
        return this.items[this.serializeKey(key)];
    }

}
