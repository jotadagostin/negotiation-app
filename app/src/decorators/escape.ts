export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let returning = originalMethod.apply(this, args);
    if (typeof returning === "string") {
      //   console.log(
      //     `@escape in action in the class ${this.constructor.name} to the method ${propertyKey}`
      //   );

      returning = returning.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return returning;
  };

  return descriptor;
}
