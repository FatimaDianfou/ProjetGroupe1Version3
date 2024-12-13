import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  login() {
    // Récupérer les informations depuis le localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (this.email === storedEmail && this.password === storedPassword) {
      this.successMessage = 'Connexion réussie !';
      this.errorMessage = '';

      // Redirection vers la page d'accueil après la connexion
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Identifiants incorrects.';
      this.successMessage = '';
    }
  }
}
