export class NegotiationView {
  private element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }
  template(): string {
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

  update(): void {
    this.element.innerHTML = this.template();
  }
}
