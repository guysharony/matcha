import { Gender, SexualPreferences } from '../models';
import { UserDto } from './user.dto';

export class AuthenticatedUserDto extends UserDto {
  email: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  sexual_preferences: SexualPreferences;
  biography: string;
  profile_picture: string;
  birth_date: Date;
  fame_rating: number;
  location: string;
  last_connection: Date;
  created_at: Date;
  updated_at: Date;
}
