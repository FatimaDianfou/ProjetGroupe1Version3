import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le rôle depuis l'URL
    this.role = this.route.snapshot.queryParamMap.get('role') || '';
  }
}
