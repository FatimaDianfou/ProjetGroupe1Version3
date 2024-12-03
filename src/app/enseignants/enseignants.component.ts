import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent {
  enseignant = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    specialite: ''
  };

  enseignantsListe: any[] = []; // Liste pour stocker les enseignants

  ajouterEnseignant() {
    // Ajouter l'enseignant dans la liste
    this.enseignantsListe.push({ ...this.enseignant });

    // Réinitialiser le formulaire
    this.enseignant = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      specialite: ''
    };

    console.log('Liste des enseignants :', this.enseignantsListe);
  }
}
