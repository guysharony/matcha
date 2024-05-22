import { createValidator } from "../templates";

export const Range = (min: number, max: number) => createValidator<number>((value, propertyKey) => {
  if (value < min || value > max) {
    throw new Error(`The property ${propertyKey} must be between ${min} and ${max}`);
  }
});
