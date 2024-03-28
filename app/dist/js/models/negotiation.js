export class Negotiation {
    constructor(_day, quantity, amount) {
        this._day = _day;
        this.quantity = quantity;
        this.amount = amount;
    }
    static createOf(dayString, quantityString, amountString) {
        const exp = /-/g;
        const day = new Date(dayString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const amount = parseFloat(amountString);
        return new Negotiation(day, quantity, amount);
    }
    get volume() {
        return this.quantity * this.amount;
    }
    get day() {
        const day = new Date(this._day.getTime());
        return day;
    }
    toText() {
        return `Day: ${this.day},
    Quantity: ${this.quantity},
    Amount: ${this.amount}`;
    }
    isIgual(negotiation) {
        return (this.day.getDate() === negotiation.day.getDate() &&
            this.day.getMonth() === negotiation.day.getMonth() &&
            this.day.getFullYear() === negotiation.day.getFullYear());
    }
}
//# sourceMappingURL=negotiation.js.map