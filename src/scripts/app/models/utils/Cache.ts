declare var global: any;

export class Cache {

    constructor() {
        if (global.cacheItems === undefined) {
            global.cacheItems = {};
        }
    }

    public serializeKey(key) {
        if (key.constructor === Array) {
            return key.join('_');
        }

        return key;
    }

    public set(key, promise) {
        global.cacheItems[this.serializeKey(key)] = promise;
    }

    public get(key) {
        return global.cacheItems[this.serializeKey(key)];
    }

}
