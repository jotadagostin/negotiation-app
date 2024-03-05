import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
  private inputDay: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputAmount: HTMLInputElement;

  constructor() {
    this.inputDay = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputAmount = document.querySelector("#valor");
  }

  add(): void {
    const negotiation = this.createNegociation();
  }

  createNegociation(): Negotiation {
    const exp = /-/g;
    const day = new Date(this.inputDay.value.replace(exp, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const amount = parseFloat(this.inputAmount.value);
    return new Negotiation(day, quantity, amount);
  }
}
