export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `modifying prototype ${target.constructor.name} and adding getter for property ${propertyKey}`
    );

    let element: HTMLElement | null = null;
    const getter = function () {
      if (!element) {
        element = <HTMLElement>document.querySelector(selector);
        console.log(
          `searching DOM element with the selector ${selector} to inject in ${propertyKey}`
        );
      }

      return element;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
