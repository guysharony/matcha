export function createValidator<T>(validate: (value: T, propertyKey: string) => void) {
  return (target: any, propertyKey: string) => {
    let value = target[propertyKey];

    const getter = () => value;
    const setter = (newVal: T) => {
      validate(newVal, propertyKey);
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}
