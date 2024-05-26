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

export interface User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  gender: Gender | undefined;
  sexual_preferences: SexualPreferences | undefined;
  biography: string | undefined;
  profile_picture: string | undefined;
  birth_date: Date | undefined;
  fame_rating: number;
  location: string | undefined;
  last_connection: Date;
  created_at: Date;
  updated_at: Date;
}
