import { Negotiation } from "./negotiation.js";

//Negotiation[] = Array<Negotiation>
export class Negotiations {
  private negotiation: Negotiation[] = [];

  add(negotiation: Negotiation) {
    this.negotiation.push(negotiation);
  }

  list(): readonly Negotiation[] {
    return this.negotiation;
  }
}
