import { UserController } from './user-controller';

export class UserRouter {
  private controller: UserController;

  constructor() {
    // Simulación de dependencia inyectada
    this.controller = new UserController({
      findUser: () => Promise.resolve(null),
      saveUser: () => Promise.resolve()
    });
  }

  async getUserRoute(id: string): Promise<any> {
    return this.controller.handleGetUser(id);
  }

  async createUserRoute(data: any): Promise<any> {
    return this.controller.handleCreateUser(data);
  }

  async updateUserRoute(id: string, data: any): Promise<any> {
    return this.controller.handleUpdateUser(id, data);
  }

  async deleteUserRoute(id: string): Promise<any> {
    return this.controller.handleDeleteUser(id);
  }
}

// Exportar una función que use el helper
export function setupRoutes(): void {
  console.log("Setting up user routes");
}
