import { Negotiation } from "./negotiation.js";

//Negotiation[] = Array<Negotiation>
export class Negotiations {
  private negotiation: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiation.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiation;
  }
}
