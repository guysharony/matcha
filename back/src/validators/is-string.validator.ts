import { createValidator } from '../templates';

export const IsString = createValidator<string>((value, propertyKey) => {
  if (typeof value !== 'string') {
    throw new Error(`The property ${propertyKey} must be a string`);
  }
});
