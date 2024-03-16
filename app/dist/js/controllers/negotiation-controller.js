import { DayOfTheWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-views.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView("#negotiationsView", true);
        this.messageView = new MessageView("#messageView");
        this.inputDay = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputAmount = document.querySelector("#valor");
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const t1 = performance.now();
        const negotiation = Negotiation.createOf(this.inputDay.value, this.inputQuantity.value, this.inputAmount.value);
        if (!this.isItUseDay(negotiation.day)) {
            this.messageView.update("just negotiations in use days are acceptable");
            return;
        }
        this.negotiations.add(negotiation);
        this.updateView();
        this.clearForm();
        const t2 = performance.now();
        console.log(`time to execut add metodo: ${(t2 - t1) / 1000} seconds`);
    }
    isItUseDay(day) {
        return (day.getDay() > DayOfTheWeek.SUNDAY && day.getDay() < DayOfTheWeek.SATURDAY);
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
