export class Negotiation {
    constructor(_day, _quantity, _amount) {
        this._day = _day;
        this._quantity = _quantity;
        this._amount = _amount;
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
