import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nom: string = '';
  prenom: string = '';
  telephone: string = '';
  adresse: string = '';
  email: string = '';
  password: string = '';
  role: string = 'directeur';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  createAccount() {
    const isCreated = this.authService.createAccount(
      this.email,
      this.password,
      this.role
    );

    if (isCreated) {
      this.successMessage = 'Compte créé avec succès ! Redirection...';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // Redirection après 2 secondes
    } else {
      this.errorMessage = "Un compte avec cet email existe déjà.";
      this.successMessage = '';
    }
  }
}
