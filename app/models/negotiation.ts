export class Negotiation {
  private _day: Date;
  private _quantity: number;
  private _amount: number;

  constructor(day: Date, quantity: number, amount: number) {
    this._day = day;
    this._quantity = quantity;
    this._amount = amount;
  }

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
