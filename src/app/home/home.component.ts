import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stats = {
    students: 120,
    courses: 15,
    teachers: 10
  };

  announcements = [
    { title: "Rentrée scolaire", date: "2024-12-15", message: "La rentrée scolaire commence le 15 décembre 2024." },
    { title: "Nouveau cours disponible", date: "2024-12-20", message: "Un nouveau cours de programmation sera lancé." }
  ];

  constructor() {}

  ngOnInit(): void {}
}
