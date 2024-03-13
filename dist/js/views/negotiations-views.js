import { View } from "./view.js";
export class NegotiationView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                  ${model
            .list()
            .map((negotiation) => {
            return `
                    <tr> 
                      <td>${this.formatter(negotiation.day)}</td>
                      <td>${negotiation.quantity}</td>
                      <td>${negotiation.amount}</td>
                    </tr>
                    `;
        })
            .join("")}
                </tbody>
            </table>
        `;
    }
    formatter(day) {
        return new Intl.DateTimeFormat().format(day);
    }
}
