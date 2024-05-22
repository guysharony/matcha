import { createValidator } from "../templates";

export function IsEnum(enumObject: any) {
  return createValidator<any>((value, propertyKey) => {
    if (!Object.values(enumObject).includes(value)) {
      throw new Error(`The property ${propertyKey} must be one of the values in the enum`);
    }
  });
}
