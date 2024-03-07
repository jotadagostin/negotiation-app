export class Negotiation {
    constructor(_day, quantity, amount) {
        this._day = _day;
        this.quantity = quantity;
        this.amount = amount;
    }
    get volume() {
        return this.quantity * this.amount;
    }
    get day() {
        const day = new Date(this._day.getTime());
        return day;
    }
}
//_ underlined before leaving the data private and private so that it cannot be changed without access.
