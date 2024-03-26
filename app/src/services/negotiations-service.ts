import { TodayNegotiations } from "../interfaces/todayNegotiation.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationService {
  public obteinNegotiation(): Promise<Negotiation[]> {
    return fetch("http://localhost:3000/dados")
      .then((res) => res.json())
      .then((todayDate: TodayNegotiations[]) => {
        return todayDate.map((dado) => {
          return new Negotiation(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
