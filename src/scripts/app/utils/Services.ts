class ServicesContainer {

    items: any;

    constructor() {
        this.items = {};
    }

    get(type) {
        if (this.items[type] === undefined) {
            this.items[type] = new type();
        }

        return this.items[type];
    }

}

export const Services = new ServicesContainer();
