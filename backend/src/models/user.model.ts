export enum Gender {
  Male = 'Man',
  Female = 'Woman',
  Other = 'Non-binary'
}

export enum SexualPreferences {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual'
}

export class User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
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
