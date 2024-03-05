import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiation: Array<Negotiation> = [];

  add(negotiation: Negotiation) {
    this.negotiation.push(negotiation);
  }

  list(): Array<Negotiation> {
    return [...this.negotiation];
  }
}
