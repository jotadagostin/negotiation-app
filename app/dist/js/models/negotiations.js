export class Negotiations {
    constructor() {
        this.negotiation = [];
    }
    add(negotiation) {
        this.negotiation.push(negotiation);
    }
    list() {
        return this.negotiation;
    }
}
