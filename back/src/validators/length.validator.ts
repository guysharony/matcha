import { createValidator } from "../templates";

export const Length = (min: number, max: number) => createValidator<string>((value, propertyKey) => {
  if (value.length < min || value.length > max) {
    throw new Error(`The property ${propertyKey} must be between ${min} and ${max} characters long`);
  }
});
