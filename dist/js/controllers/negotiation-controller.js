import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-views.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.inputDay = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputAmount = document.querySelector("#valor");
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        negotiation.day.setDate(12);
        this.negotiations.add(negotiation);
        this.updateView();
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
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Trading added sucessfully");
    }
}
