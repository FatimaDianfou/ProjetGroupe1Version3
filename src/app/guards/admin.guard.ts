import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Vérifier si l'utilisateur est un administrateur
    if (this.authService.isAdmin()) {
      return true;
    } else {
      // Rediriger vers la page d'accueil si l'utilisateur n'est pas un administrateur
      this.router.navigate(['/home']);
      return false;
    }
  }
}
