import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Sauvegarde dans le localStorage
    localStorage.setItem('userEmail', this.email);
    localStorage.setItem('userPassword', this.password);

    // Message de succès
    this.successMessage = 'Inscription réussie !';
    this.errorMessage = '';

    // Redirection vers la page de connexion après l'inscription
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
