import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './model/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      new User("1", "my@email.com", "me my", "123"),
      new User("2", "my@email.com", "me my", "123"),
      new User("3", "my@email.com", "me my", "123")
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => Number.parseInt(user.getID()))) + 1 : 11;
  }
}
