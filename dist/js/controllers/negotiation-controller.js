import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDay = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputAmount = document.querySelector("#valor");
    }
    add() {
        const negotiation = this.createNegotiation();
        negotiation.day.setDate(12);
        this.negotiations.add(negotiation);
        this.negotiations.list();
        console.log(this.negotiations.list());
        this.add;
        this.clearForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const day = new Date(this.inputDay.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const amount = parseFloat(this.inputAmount.value);
        return new Negotiation(day, quantity, amount);
    }
    clearForm() {
        this.inputDay.value = "";
        this.inputQuantity.value = "";
        this.inputAmount.value = "";
        this.inputDay.focus();
    }
}
