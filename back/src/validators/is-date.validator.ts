import { createValidator } from '../templates';

export const IsDate = createValidator<any>((value, propertyKey) => {
  if (Object.prototype.toString.call(value) !== '[object Date]' || isNaN(value.getTime())) {
    throw new Error(`The property ${propertyKey} must be a valid date`);
  }
});
