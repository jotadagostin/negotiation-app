import { Printing } from "../utils/printing.js";
import { Negotiation } from "./negotiation.js";

//Negotiation[] = Array<Negotiation>
export class Negotiations implements Printing {
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiations;
  }

  public toText(): string {
    return JSON.stringify(this.negotiations, null, 2);
  }
}
