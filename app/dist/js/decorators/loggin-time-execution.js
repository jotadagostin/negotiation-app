export function logTimeExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let toDivide = 1;
            let unity = "miliseconds";
            if (inSeconds) {
                toDivide = 1000;
                unity = "seconds";
            }
            const t1 = performance.now();
            const returning = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, time execution: ${(t2 - t1) / toDivide} ${unity}`);
            returning;
        };
        return descriptor;
    };
}
