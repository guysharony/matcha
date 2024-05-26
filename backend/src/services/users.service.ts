import { User } from '../models';

class UsersService {
  private users: { [key: number]: User } = {};
  private nextId = 1;

  create(user: User) {
    if (Object.values(this.users).find(
      u => u.email === user.email || u.username === user.username))
      return false;
    user.id = this.nextId++;
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
}

export const usersService = new UsersService();
