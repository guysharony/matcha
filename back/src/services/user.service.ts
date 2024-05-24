import { RegisterDto } from '../dto';
import { User } from '../models';

export class UserService {
  private users: { [key: number]: User } = {};
  private nextId = 1;

  create(dto: RegisterDto) {
    if (Object.values(this.users).find(
      u => u.email === dto.email || u.username === dto.username))
      return false;
    const user: User = {
      id: this.nextId++,
      email: dto.email,
      username: dto.username,
      password: dto.password,
      gender: undefined,
      sexual_preferences: undefined,
      biography: undefined,
      profile_picture: undefined,
      first_name: dto.first_name,
      last_name: dto.last_name,
      birth_date: undefined,
      fame_rating: 0,
      location: undefined,
      last_connection: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    };
    this.users[user.id] = user;
    return user;
  }
}
