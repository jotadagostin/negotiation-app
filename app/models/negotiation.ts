export class Negotiation {
  constructor(
    private _day: Date,
    private _quantity: number,
    private _amount: number
  ) {}

  get day(): Date {
    return this._day;
  }

  get quantity(): number {
    return this._quantity;
  }

  get amount(): number {
    return this._amount;
  }

  get volume(): number {
    return this._quantity * this._amount;
  }
}

//_ underlined before leaving the data private and private so that it cannot be changed without access.
