var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/loggin-time-execution.js";
import { DayOfTheWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationService } from "../services/negotiations-service.js";
import { toPrint } from "../utils/toprint.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-views.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.negotiationService = new NegotiationService();
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createOf(this.inputDay.value, this.inputQuantity.value, this.inputAmount.value);
        if (!this.isItUseDay(negotiation.day)) {
            this.messageView.update("just negotiations in use days are acceptable");
            return;
        }
        this.negotiations.add(negotiation);
        toPrint(negotiation, this.negotiations);
        this.updateView();
        this.clearForm();
    }
    importDate() {
        this.negotiationService.obteinNegotiation().then((TodayNegotiations) => {
            for (let negotiation of TodayNegotiations) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
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
    domInjector("#data")
], NegotiationController.prototype, "inputDay", void 0);
__decorate([
    domInjector("#quantidade")
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#valor")
], NegotiationController.prototype, "inputAmount", void 0);
__decorate([
    inspect,
    logTimeExecution()
], NegotiationController.prototype, "add", null);
