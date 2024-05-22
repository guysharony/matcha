import { createValidator } from '../templates';

export const IsEmail = createValidator<string>((value, propertyKey) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
      throw new Error(`The property ${propertyKey} must be a valid email`);
  }
});
