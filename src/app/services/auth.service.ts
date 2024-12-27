import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: Array<{ email: string; password: string; role: string }> = [
    { email: 'admin@example.com', password: 'Admin123!', role: 'admin' },
    { email: 'directeur@example.com', password: 'Directeur123!', role: 'directeur' },
    { email: 'responsable@example.com', password: 'Responsable123!', role: 'responsable' },
  ];

  private loggedInUser: { email: string; role: string } | null = null;

  createAccount(email: string, password: string, role: string): boolean {
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      return false; // Compte déjà existant
    }
    this.users.push({ email, password, role });
    return true;
  }

  login(email: string, password: string): { success: boolean; role?: string } {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.loggedInUser = { email: user.email, role: user.role };
      return { success: true, role: user.role };
    }

    return { success: false };
  }

  logout() {
    this.loggedInUser = null;
  }

  isAdmin(): boolean {
    return this.loggedInUser?.role === 'admin';
  }

  // Ajout de la méthode pour récupérer un utilisateur par e-mail
  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
