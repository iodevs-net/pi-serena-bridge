export class UserService {
  private users: User[] = [];

  constructor(private db: Database) {}

  // MODIFICADO: Cambiamos la firma del método para testing de impacto
  async getUserById(id: string, includeInactive: boolean = false): Promise<User | null> {
    // MODIFICADO: Añadimos lógica extra para testing
    if (includeInactive) {
      // Lógica para incluir usuarios inactivos
      return this.db.findUserWithInactive(id);
    }
    return this.db.findUser(id);
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      ...userData,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  async deleteUser(id: string): Promise<boolean> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    
    this.users.splice(index, 1);
    return true;
  }
}

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

class Database {
  async findUser(id: string): Promise<User | null> {
    // Simulación de base de datos
    return null;
  }

  // MODIFICADO: Añadimos nuevo método para testing
  async findUserWithInactive(id: string): Promise<User | null> {
    return null;
  }

  async saveUser(user: User): Promise<void> {
    // Simulación de guardado
  }
}

export function helperFunction(): void {
  console.log("Esta es una función de ayuda");
}

const CONSTANT_VALUE = 42;
