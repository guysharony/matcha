import { User } from '../models';

class UserService {
  private users: { [key: number]: User } = {};
  private nextId = 1;

  create(user: User) {
    if (Object.values(this.users).find(
      u => u.email === user.email || u.username === user.username))
      return false;
    user.id = this.nextId++;
    user.is_activated = false;
    user.last_connection = new Date();
    user.created_at = new Date();
    user.updated_at = new Date();
    this.users[user.id] = user;
    return user;
  }

  findById(id: number) {
    return this.users[id];
  }

  findByLogin(login: string) {
    return Object.values(this.users).find(
      u => u.email === login || u.username === login);
  }

  list() {
    return Object.values(this.users);
  }

  update(user: User) {
    if (!this.users[user.id])
      return false;
    this.users[user.id] = user;
    return true;
  }

  remove(id: number) {
    if (!this.users[id])
      return false;
    delete this.users[id];
    return true;
  }

  removeNotActivatedWithin24Hours() {
    const t = new Date().getTime();
    const maxSeconds = 24 * 60 * 60;
    const users = Object.values(this.users).filter(
      u => !u.is_activated && t - u.created_at.getTime() > 1000 * maxSeconds);
    users.forEach(u => delete this.users[u.id]);
    return users;
  }
}

export const userService = new UserService();
