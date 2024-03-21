export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`modifying prototype ${target.constructor.name} and adding getter for property ${propertyKey}`);
        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`searching DOM element with the selector ${selector} to inject in ${propertyKey}`);
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}