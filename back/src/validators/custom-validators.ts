import { IsNotEmpty, IsString, Length, Matches, MaxLength, ValidationGroup } from '.';

export const IsFamilyName = (): PropertyDecorator =>
  ValidationGroup(
    IsNotEmptyString(),
    MaxLength(50),
    Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]+$/,
      'invalid family name')
  );

export const IsPassword = (): PropertyDecorator =>
  ValidationGroup(
    IsNotEmptyString(),
    Length(8, 20),
    Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      'password must contain at least one lowercase letter, one uppercase letter, one number and one special character')
  );

export const IsUsername = (): PropertyDecorator =>
  ValidationGroup(
    Length(4, 20),
    Matches(/^(?!_)(?!.*_{2})\w+(?<!_)$/,
      'username must contain only letters, numbers and underscores, and must not start or end with an underscore')
  );

export const IsNotEmptyString = (): PropertyDecorator =>
  ValidationGroup(
    IsString(),
    IsNotEmpty()
  );
