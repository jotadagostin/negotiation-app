export function logTimeExecution() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const returning = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, time execution: ${(t2 - t1) / 1000} seconds`
      );
      returning;
    };

    return descriptor;
  };
}
