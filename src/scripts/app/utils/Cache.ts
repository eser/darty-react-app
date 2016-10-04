export class Cache {

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
