import { Model } from "../interfaces/model.js";
import { Negotiation } from "./negotiation.js";

//Negotiation[] = Array<Negotiation>
export class Negotiations implements Model<Negotiations> {
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

  public isIgual(negotiations: Negotiations): boolean {
    return (
      JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list)
    );
  }
}
