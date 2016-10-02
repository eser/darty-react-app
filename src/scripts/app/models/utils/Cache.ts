export class Cache {

    items: any;

    constructor() {
        this.items = {};
    }

    set(key, promise) {
        this.items[key] = promise;
    }

    get(key) {
        return this.items[key];
    }

}
