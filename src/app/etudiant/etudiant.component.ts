import { Component, OnInit } from '@angular/core';

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  classe: string;
}

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  searchText: string = ''; // Texte de recherche
  popupVisible: boolean = false; // Indique si la popup est visible
  isEditMode: boolean = false; // Mode édition ou ajout
  etudiants: Etudiant[] = []; // Liste des étudiants
  etudiant: Etudiant = { id: 0, nom: '', prenom: '', email: '', classe: '' }; // Étudiant en cours d'ajout/modification

  constructor() {}

  ngOnInit(): void {
    // Exemple de données initiales
    this.etudiants = [
      { id: 1, nom: 'Diallo', prenom: 'Fatima', email: 'fatima.diallo@gmail.com', classe: 'Terminale' },
      { id: 2, nom: 'Baldé', prenom: 'Mamadou', email: 'mamadou.balde@gmail.com', classe: 'Première' }
    ];
  }

  // Ouvrir la popup
  ouvrirPopup(): void {
    this.reinitialiserFormulaire(); // Réinitialiser le formulaire avant ouverture
    this.popupVisible = true;
  }

  // Fermer la popup
  fermerPopup(): void {
    this.popupVisible = false;
  }

  // Ajouter ou Modifier un étudiant
  ajouterOuModifierEtudiant(): void {
    if (this.etudiant.nom && this.etudiant.prenom && this.etudiant.email && this.etudiant.classe) {
      if (this.isEditMode) {
        // Mettre à jour l'étudiant existant
        const index = this.etudiants.findIndex(e => e.id === this.etudiant.id);
        this.etudiants[index] = { ...this.etudiant };
        this.isEditMode = false;
      } else {
        // Ajouter un nouvel étudiant
        this.etudiant.id = this.etudiants.length + 1; // Générer un nouvel ID
        this.etudiants.push({ ...this.etudiant });
      }
      this.reinitialiserFormulaire();
      this.fermerPopup(); // Fermer la popup après soumission
    }
  }

  // Réinitialiser le formulaire
  reinitialiserFormulaire(): void {
    this.etudiant = { id: 0, nom: '', prenom: '', email: '', classe: '' };
    this.isEditMode = false;
  }

  // Modifier un étudiant
  modifierEtudiant(etudiant: Etudiant): void {
    this.etudiant = { ...etudiant };
    this.isEditMode = true;
    this.popupVisible = true; // Ouvrir la popup en mode édition
  }

  // Supprimer un étudiant
  supprimerEtudiant(id: number): void {
    this.etudiants = this.etudiants.filter(etudiant => etudiant.id !== id);
  }

  // Filtrer les étudiants selon la recherche
  get etudiantsFiltres(): Etudiant[] {
    if (!this.searchText.trim()) {
      return this.etudiants; // Retourner tous les étudiants si la recherche est vide
    }
    return this.etudiants.filter(etudiant =>
      `${etudiant.nom} ${etudiant.prenom} ${etudiant.email} ${etudiant.classe}`
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }
}
