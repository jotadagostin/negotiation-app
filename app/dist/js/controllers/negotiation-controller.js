var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logTimeExecution } from "../decorators/loggin-time-execution.js";
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
        const negotiation = Negotiation.createOf(this.inputDay.value, this.inputQuantity.value, this.inputAmount.value);
        if (!this.isItUseDay(negotiation.day)) {
            this.messageView.update("just negotiations in use days are acceptable");
            return;
        }
        this.negotiations.add(negotiation);
        this.updateView();
        this.clearForm();
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
__decorate([
    logTimeExecution()
], NegotiationController.prototype, "add", null);
