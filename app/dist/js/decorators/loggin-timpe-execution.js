export function logTimeExecution() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
