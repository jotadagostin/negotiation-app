import { Negotiation } from "../models/negotiation";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationView {
  private element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }
  template(model: Negotiations): string {
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
                      <td>?</td>
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

  update(model: Negotiations): void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = this.template(model);
  }
}
