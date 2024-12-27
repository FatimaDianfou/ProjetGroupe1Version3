import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
successMessage: any;
onForgotPassword() {
throw new Error('Method not implemented.');
}
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const result = this.authService.login(this.email, this.password);

    if (result.success) {
      this.errorMessage = '';
      if (result.role === 'directeur' || result.role === 'responsable') {
        this.router.navigate(['/home']); // Page d'accueil pour les directeurs/responsables
      }
    } else {
      this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
    }
  }
}
