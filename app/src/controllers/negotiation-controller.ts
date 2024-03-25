import { inspect } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/loggin-time-execution.js";
import { DayOfTheWeek } from "../enums/days-of-the-week.js";
import { TodayNegotiations } from "../interfaces/todayNegotiation.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiations-views.js";

export class NegotiationController {
  private inputDay: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationView("#negotiationsView");
  private messageView = new MessageView("#messageView");

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
    this.updateView();
    this.clearForm();
  }

  public importDate(): void {
    fetch("http://localhost:3000/dados")
      .then((res) => res.json())
      .then((todayDate: TodayNegotiations[]) => {
        return todayDate.map((dado) => {
          return new Negotiation(new Date(), dado.vezes, dado.montante);
        });
      })
      .then((TodayNegotiations) => {
        for (let negotiation of TodayNegotiations) {
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
