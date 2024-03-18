export function logTimeExecution(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let toDivide = 1;
      let unity = "miliseconds";
      if (inSeconds) {
        toDivide = 1000;
        unity = "seconds";
      }

      const t1 = performance.now();
      const returning = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, time execution: ${(t2 - t1) / toDivide} ${unity}`
      );
      returning;
    };

    return descriptor;
  };
}
