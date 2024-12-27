import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  specialite: string = '';
  telephone: string = '';
  adresse: string = '';
  enseignantsList: any[] = [];
  filteredEnseignants: any[] = [];
  searchQuery: string = '';

  editEnseignantIndex: number | null = null;

  constructor() {
    this.loadEnseignants();
  }

  ngOnInit(): void {
    this.filteredEnseignants = [...this.enseignantsList];
  }

  loadEnseignants() {
    const storedEnseignants = localStorage.getItem('enseignantsList');
    if (storedEnseignants) {
      this.enseignantsList = JSON.parse(storedEnseignants);
    }
    this.filteredEnseignants = [...this.enseignantsList];
  }

  ajouterOuModifierEnseignant() {
    const newEnseignant = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      specialite: this.specialite,
      telephone: this.telephone,
      adresse: this.adresse
    };

    if (this.editEnseignantIndex !== null) {
      this.enseignantsList[this.editEnseignantIndex] = newEnseignant;
      this.editEnseignantIndex = null;
    } else {
      this.enseignantsList.push(newEnseignant);
    }

    localStorage.setItem('enseignantsList', JSON.stringify(this.enseignantsList));
    this.filteredEnseignants = [...this.enseignantsList];
    this.resetForm();
    this.closeFormModal();
  }

  editEnseignant(index: number) {
    const enseignant = this.enseignantsList[index];
    this.nom = enseignant.nom;
    this.prenom = enseignant.prenom;
    this.email = enseignant.email;
    this.specialite = enseignant.specialite;
    this.telephone = enseignant.telephone;
    this.adresse = enseignant.adresse;
    this.editEnseignantIndex = index;
    this.openFormModal();
  }

  supprimerEnseignant(index: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      this.enseignantsList.splice(index, 1);
      localStorage.setItem('enseignantsList', JSON.stringify(this.enseignantsList));
      this.filteredEnseignants = [...this.enseignantsList];
    }
  }

  rechercherEnseignant() {
    this.filteredEnseignants = this.enseignantsList.filter(enseignant =>
      enseignant.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      enseignant.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  resetForm() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.specialite = '';
    this.telephone = '';
    this.adresse = '';
  }

  openFormModal() {
    const modal = document.getElementById('enseignantModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  closeFormModal() {
    const modal = document.getElementById('enseignantModal');
    if (modal) {
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal?.hide();
    }
  }
}
