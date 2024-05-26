import { IsNotEmptyString } from '../validators';

export class LoginDto {
  @IsNotEmptyString()
  login: string;
  @IsNotEmptyString()
  password: string;
}
