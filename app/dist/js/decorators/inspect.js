export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method ${propertyKey}`);
        console.log(`------paramethers: ${JSON.stringify(args)}`);
        const returning = originalMethod.apply(this, args);
        console.log(`--- returning: ${JSON.stringify(returning)}`);
        return returning;
    };
    return descriptor;
}
