export class NegotiationView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
    }
    update() {
        this.element.innerHTML = this.template();
    }
}
