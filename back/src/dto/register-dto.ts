// TODO: Add validation

export class RegisterDto {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;

  constructor(email: string, username: string, first_name: string, last_name: string,
    password: string) {
    this.email = email;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
  }
}
