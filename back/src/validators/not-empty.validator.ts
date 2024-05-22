import { createValidator } from "../templates";

export const NotEmpty = createValidator<any>((value, propertyKey) => {
  if (value === null || value === undefined || value === '') {
    throw new Error(`The property ${propertyKey} cannot be empty`);
  }
});
