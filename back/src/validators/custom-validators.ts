import { IsNotEmpty, IsString, Length, Matches, MaxLength, ValidationGroup } from '.';

export const IsFamilyName = (): PropertyDecorator =>
  ValidationGroup(
    IsString(),
    IsNotEmpty(),
    MaxLength(50),
    Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]+$/,
      'Invalid family name')
  );

export const IsPassword = (): PropertyDecorator =>
  ValidationGroup(
    IsString(),
    IsNotEmpty(),
    Length(8, 20),
    Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character')
  );

export const IsUsername = (): PropertyDecorator =>
  ValidationGroup(
    Length(4, 20),
    Matches(/^(?!_)(?!.*_{2})\w+(?<!_)$/,
      'Username must contain only letters, numbers and underscores, and must not start or end with an underscore')
  );
