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
    static createOf(dayString, quantityString, amountString) {
        const exp = /-/g;
        const day = new Date(dayString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const amount = parseFloat(amountString);
        return new Negotiation(day, quantity, amount);
    }
}
