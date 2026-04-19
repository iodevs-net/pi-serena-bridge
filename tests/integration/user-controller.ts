import { UserService } from './test-file';
import { User } from './test-file';

export class UserController {
  private userService: UserService;

  constructor(db: any) {
    this.userService = new UserService(db);
  }

  // MODIFICADO: Usando el nuevo parámetro de getUserById
  async handleGetUser(id: string, includeInactive: boolean = false): Promise<User | null> {
    return this.userService.getUserById(id, includeInactive);
  }

  async handleCreateUser(data: Omit<User, 'id'>): Promise<User> {
    return this.userService.createUser(data);
  }

  async handleUpdateUser(id: string, updates: Partial<User>): Promise<User | null> {
    return this.userService.updateUser(id, updates);
  }

  async handleDeleteUser(id: string): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}

// Esta función también usa el helper de test-file
export function initializeApp(): void {
  helperFunction();
  console.log("App initialized with constant:", CONSTANT_VALUE);
}
