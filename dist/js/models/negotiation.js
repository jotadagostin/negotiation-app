export class Negotiation {
  #day;
  #quantity;
  #amount;

  constructor(date, quantity, amount) {
    this.#day = date;
    this.#quantity = quantity;
    this.#amount = amount;
  }

  get day() {
    return this.#day;
  }

  get quantity() {
    return this.#quantity;
  }

  get amount() {
    return this.#amount;
  }

  get volume() {
    return this.#quantity * this.#amount;
  }
}
