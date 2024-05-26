import { IsEmail, IsFamilyName, IsPassword, IsUsername } from '../validators';

export class RegisterDto {
  @IsEmail()
  email: string;
  @IsUsername()
  username: string;
  @IsFamilyName()
  first_name: string;
  @IsFamilyName()
  last_name: string;
  @IsPassword()
  password: string;
}
