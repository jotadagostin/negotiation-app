import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationView } from "../views/negotiations-views.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView("#negotiationsView");
        this.inputDay = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputAmount = document.querySelector("#valor");
        this.negotiationsView.update();
    }
    add() {
        const negotiation = this.createNegotiation();
        negotiation.day.setDate(12);
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
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
