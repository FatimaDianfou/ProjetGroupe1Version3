import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  stats = {
    students: 0,
    courses: 0,
    teachers: 0,
  };
  announcements = [
    { title: 'Nouvelle année scolaire', date: '2024-01-01', message: 'Bienvenue à tous les étudiants.' },
    { title: 'Mise à jour des cours', date: '2024-01-15', message: 'De nouveaux cours ont été ajoutés.' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Vérifier si l'utilisateur est un administrateur
    this.isAdmin = this.authService.isAdmin();

    // Charger les statistiques (vous pouvez remplacer par une API ou des données dynamiques)
    this.stats = {
      students: 150,
      courses: 25,
      teachers: 12,
    };
  }
}
