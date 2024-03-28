import { Negotiation } from "../models/negotiation.js";
export class NegotiationService {
    obteinNegotiation() {
        return fetch("http://localhost:3000/dados")
            .then((res) => res.json())
            .then((todayDate) => {
            return todayDate.map((dado) => {
                return new Negotiation(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiations-service.js.map