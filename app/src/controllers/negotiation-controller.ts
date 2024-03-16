import { logTimeExecution } from "../decorators/loggin-timpe-execution.js";
import { DayOfTheWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-views.js";

export class NegotiationController {
  private inputDay: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationView("#negotiationsView", true);
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDay = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantity = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputAmount = document.querySelector("#valor") as HTMLInputElement;
    this.negotiationsView.update(this.negotiations);
  }

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
    this.updateView();
    this.clearForm();
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
