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
  @domInjector("#data")
  private inputDay: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantity: HTMLInputElement;
  @domInjector("#valor")
  private inputAmount: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationView("#negotiationsView");
  private messageView = new MessageView("#messageView");
  private negotiationService = new NegotiationService();

  constructor() {
    this.negotiationsView.update(this.negotiations);
  }

  @inspect
  @logTimeExecution()
  public add(): void {
    const negotiation = Negotiation.createOf(
      this.inputDay.value,
      this.inputQuantity.value,
      this.inputAmount.value
    );
    if (!this.isItUseDay(negotiation.day)) {
      this.messageView.update("just negotiations in use days are acceptable");
      return;
    }

    this.negotiations.add(negotiation);
    toPrint(negotiation, this.negotiations);
    this.updateView();
    this.clearForm();
  }

  public importDate(): void {
    this.negotiationService
      .obteinNegotiation()
      .then((todayNegotiations) => {
        return todayNegotiations.filter((todayNegotiations) => {
          return !this.negotiations
            .list()
            .some((negotiation) => negotiation.isIgual(todayNegotiations));
        });
      })

      .then((todayNegotiations) => {
        for (let negotiation of todayNegotiations) {
          this.negotiations.add(negotiation);
        }
        this.negotiationsView.update(this.negotiations);
      });
  }

  private isItUseDay(day: Date) {
    return (
      day.getDay() > DayOfTheWeek.SUNDAY && day.getDay() < DayOfTheWeek.SATURDAY
    );
  }

  private clearForm(): void {
    this.inputDay.value = "";
    this.inputQuantity.value = "";
    this.inputAmount.value = "";
    this.inputDay.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Trading added sucessfully");
  }
}
