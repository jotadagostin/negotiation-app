export class Negotiation {
    constructor(day, quantity, amount) {
        this._day = day;
        this._quantity = quantity;
        this._amount = amount;
    }
    get day() {
        return this._day;
    }
    get quantity() {
        return this._quantity;
    }
    get amount() {
        return this._amount;
    }
    get volume() {
        return this._quantity * this._amount;
    }
}
//_ underlined before leaving the data private and private so that it cannot be changed without access.
