export class Negotiation {
  constructor(
    private readonly _day: Date,
    public readonly quantity: number,
    public readonly amount: number
  ) {}

  get volume(): number {
    return this.quantity * this.amount;
  }

  get day(): Date {
    const day = new Date(this._day.getTime());
    return day;
  }
}

//_ underlined before leaving the data private and private so that it cannot be changed without access.
