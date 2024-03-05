export class NegotiationController {
  private inputDay;
  private inputQuantity;
  private inputAmount;

  constructor() {
    this.inputDay = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputAmount = document.querySelector("#valor");
  }

  add() {
    console.log(this.inputDay);
    console.log(this.inputQuantity);
    console.log(this.inputAmount);
  }
}
