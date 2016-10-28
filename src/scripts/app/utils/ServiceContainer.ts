export class ServiceContainer {

    items: Map<any, any>;

    constructor() {
        this.items = new Map<any, any>();
    }

    get(type: any): any {
        if (!this.items.has(type)) {
            this.items[type] = new type();
        }

        return this.items[type];
    }

}

export default ServiceContainer;
