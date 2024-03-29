export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    toText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
    isIgual(negotiations) {
        return (JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list));
    }
}
//# sourceMappingURL=negotiations.js.map