class ServicesContainer {

    items: { [key: string]: any };

    constructor() {
        this.items = {};
    }

    get(type: any): any {
        if (this.items[type] === undefined) {
            this.items[type] = new type();
        }

        return this.items[type];
    }

}

export const services = new ServicesContainer();
