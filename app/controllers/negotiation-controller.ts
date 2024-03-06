import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationController {
  private inputDay: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private negotiations = new Negotiations();

  constructor() {
    this.inputDay = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputAmount = document.querySelector("#valor");
  }

  add(): void {
    const negotiation = this.createNegociation();
    this.negotiations.add(negotiation);
    this.negotiations.list();
    console.log(this.negotiations.list());
    this.add;
    this.clearForm();
  }

  createNegociation(): Negotiation {
    const exp = /-/g;
    const day = new Date(this.inputDay.value.replace(exp, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const amount = parseFloat(this.inputAmount.value);
    return new Negotiation(day, quantity, amount);
  }

  clearForm(): void {
    this.inputDay.value = "";
    this.inputQuantity.value = "";
    this.inputAmount.value = "";
    this.inputDay.focus();
  }
}
