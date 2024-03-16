export abstract class View<T> {
  protected element: HTMLElement;
  private escape = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(
        `Selector ${selector} does not exist in DOM. Please check it`
      );
    }
    if (escape) {
      this.escape = escape;
    }
  }

  public update(model: T): void {
    const t1 = performance.now();
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
    const t2 = performance.now();
    console.log(`Time to execute the update: ${(t2 - t1) / 1000} seconds`);
  }

  protected abstract template(model: T): string;
}
