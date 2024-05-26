import 'reflect-metadata';
import { VALIDATION_METADATA_KEY, VALIDATION_OPTIONAL_KEY } from './constants';
import { ValidatorMetadata } from '.';

interface ValidationError {
  field: string;
  message: string;
}

export function validate(instance: any): { field: string, message: string }[] {
  const errors: ValidationError[] = [];
  const targetConstructor = instance.constructor;
  const targetBase = new targetConstructor();

  const addError = (field: string, message: string) => errors.push({ field, message });

  for (const prop of Object.getOwnPropertyNames(instance)) {
    const validators: ValidatorMetadata[] =
      Reflect.getMetadata(VALIDATION_METADATA_KEY, targetConstructor.prototype, prop) || [];
    if (validators.length) {
      const isOptional = Reflect.getMetadata(VALIDATION_OPTIONAL_KEY, targetConstructor.prototype, prop);
      if (isOptional && instance[prop] === undefined)
        continue;
      for (const { validator, message } of validators)
        if (!validator(instance[prop]))
          addError(prop, message);
    } else {
      if (!targetBase.hasOwnProperty(prop))
        addError(prop, 'Unexpected property');
      else if (instance[prop] === undefined)
        addError(prop, 'Missing property');
    }
  }

  return errors;
}
