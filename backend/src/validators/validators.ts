import { VALIDATION_OPTIONAL_KEY } from './constants';
import { ValidatorFunction, createValidator } from '.';

function validatorWrapper(validator: ValidatorFunction, defaultMessage: string):
  (message?: string) => PropertyDecorator {
  return (message: string = defaultMessage) => createValidator(validator, message);
}

export const IsDate = validatorWrapper((x) => x instanceof Date, 'must be a date');

export const IsEmail = validatorWrapper((x) => typeof x === 'string' &&
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x),
  'must be a valid email');

export function IsEnum(enumObj: object): PropertyDecorator {
  const enumValues = Object.values(enumObj);
  return createValidator(
    (x) => enumValues.includes(x),
    `must be one of: ${enumValues.join(', ')}`);
}

export const IsNotEmpty = validatorWrapper(
  (x) => x !== undefined && x !== null && x !== '', 'must not be empty');

export const IsNumber = validatorWrapper((x) => typeof x === 'number', 'must be a number');

export function IsOptional(): PropertyDecorator {
  return (target: Object, propertyName: string | symbol) =>
    Reflect.defineMetadata(VALIDATION_OPTIONAL_KEY, true, target, propertyName);
}

export const IsString = validatorWrapper((x) => typeof x === 'string', 'must be a string');

export const Length = (min: number, max: number): PropertyDecorator =>
  createValidator(
    (x) => typeof x === 'string' && x.length >= min && x.length <= max,
    `must be between ${min} and ${max} characters long`);

export const MaxLength = (max: number): PropertyDecorator =>
  createValidator(
    (x) => typeof x === 'string' && x.length <= max,
    `must be at most ${max} characters long`);

export const MinLength = (min: number): PropertyDecorator =>
  createValidator(
    (x) => typeof x === 'string' && x.length >= min,
    `must be at least ${min} characters long`);

export const Matches = (pattern: RegExp, message?: string): PropertyDecorator =>
  createValidator(
    (x) => typeof x === 'string' && pattern.test(x),
    message || 'must match the pattern');

export function ValidationGroup(...validators: PropertyDecorator[]): PropertyDecorator {
  return (target: Object, propertyName: string | symbol) => {
    for (const validator of validators)
      validator(target, propertyName);
  };
}
