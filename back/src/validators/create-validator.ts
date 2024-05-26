import 'reflect-metadata';
import { VALIDATION_METADATA_KEY } from '.';

export type ValidatorFunction = (value: any) => boolean;

export interface ValidatorMetadata {
  validator: ValidatorFunction;
  message: string;
}

export function createValidator(validator: ValidatorFunction, message: string): PropertyDecorator {
  return (target: Object, propertyName: string | symbol) => {
      const existingValidators: ValidatorMetadata[] = Reflect.getMetadata(VALIDATION_METADATA_KEY, target, propertyName) || [];
      existingValidators.push({ validator, message });
      Reflect.defineMetadata(VALIDATION_METADATA_KEY, existingValidators, target, propertyName);
  };
}
