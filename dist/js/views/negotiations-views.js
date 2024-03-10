export class NegotiationView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = this.template(model);
    }
}
