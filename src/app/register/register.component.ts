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
  dateNaissance: string = '';
  adresse: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) => u.email === this.email);

    if (existingUser) {
      alert("Cet email est déjà utilisé.");
    } else {
      const newUser = {
        nom: this.nom,
        prenom: this.prenom,
        dateNaissance: this.dateNaissance,
        adresse: this.adresse,
        email: this.email,
        password: this.password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
      this.router.navigate(['/login']);
    }
  }
}
