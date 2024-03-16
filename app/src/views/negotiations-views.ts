import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationView extends View<Negotiations> {
  protected template(model: Negotiations): string {
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

  private formatter(day: Date): string {
    return new Intl.DateTimeFormat().format(day);
  }
}
