import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDay = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputAmount = document.querySelector("#valor");
    }
    add() {
        const negotiation = this.createNegociation();
        console.log(negotiation);
        this.clearForm();
    }
    createNegociation() {
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
