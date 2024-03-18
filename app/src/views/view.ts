import { inspect } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/loggin-time-execution.js";

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

  @inspect()
  @logTimeExecution(true)
  public update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
