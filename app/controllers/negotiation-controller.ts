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
    this.inputDay = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputAmount = document.querySelector("#valor");
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = this.createNegotiation();
    negotiation.day.setDate(12);
    this.negotiations.add(negotiation);
    this.updateView();

    this.clearForm();
  }

  private createNegotiation(): Negotiation {
    const exp = /-/g;
    const day = new Date(this.inputDay.value.replace(exp, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const amount = parseFloat(this.inputAmount.value);
    return new Negotiation(day, quantity, amount);
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
