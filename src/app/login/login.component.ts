import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  // Pour l'enregistrement
  registerEmail: string = '';
  registerPassword: string = '';
  registerErrorMessage: string = '';

  constructor() {}

  // Vérification du login
  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Récupérer les utilisateurs enregistrés
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);

    if (user) {
      this.successMessage = 'Connexion réussie ! Bienvenue !';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect.';
      this.successMessage = '';
    }
  }

  // Création d'un compte
  register() {
    if (!this.registerEmail || !this.registerPassword) {
      this.registerErrorMessage = 'Veuillez remplir tous les champs pour créer un compte.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Récupérer les utilisateurs existants
    const existingUser = users.find((u: any) => u.email === this.registerEmail);

    if (existingUser) {
      this.registerErrorMessage = 'Cet email est déjà utilisé.';
    } else {
      users.push({ email: this.registerEmail, password: this.registerPassword });
      localStorage.setItem('users', JSON.stringify(users)); // Sauvegarde dans localStorage
      this.registerErrorMessage = '';
      alert('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
      this.registerEmail = '';
      this.registerPassword = '';
    }
  }
}
