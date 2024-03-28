import { Model } from "../interfaces/model.js";

export class Negotiation implements Model<Negotiation> {
  constructor(
    private readonly _day: Date,
    public readonly quantity: number,
    public readonly amount: number
  ) {}

  public static createOf(
    dayString: string,
    quantityString: string,
    amountString: string
  ): Negotiation {
    const exp = /-/g;
    const day = new Date(dayString.replace(exp, ","));
    const quantity = parseInt(quantityString);
    const amount = parseFloat(amountString);
    return new Negotiation(day, quantity, amount);
  }

  get volume(): number {
    return this.quantity * this.amount;
  }

  get day(): Date {
    const day = new Date(this._day.getTime());
    return day;
  }

  public toText(): string {
    return `Day: ${this.day},
    Quantity: ${this.quantity},
    Amount: ${this.amount}`;
  }

  public isIgual(negotiation: Negotiation): boolean {
    return (
      this.day.getDate() === negotiation.day.getDate() &&
      this.day.getMonth() === negotiation.day.getMonth() &&
      this.day.getFullYear() === negotiation.day.getFullYear()
    );
  }
}

//_ underlined before leaving the data private and private so that it cannot be changed without access.
