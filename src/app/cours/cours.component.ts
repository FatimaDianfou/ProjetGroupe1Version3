import { Component } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
getEtudiantNameById(_t31: any) {
throw new Error('Method not implemented.');
}
isLastEtudiant(arg0: any,_t31: any) {
throw new Error('Method not implemented.');
}
  // Liste des cours
  coursList = [
    { id: 1, matiere: 'Mathématiques', nombreHeures: 30 },
    { id: 2, matiere: 'Physique', nombreHeures: 25 },
    { id: 3, matiere: 'Chimie', nombreHeures: 20 }
  ];

  filteredCoursList = [...this.coursList]; // Liste filtrée pour la recherche

  // États pour ajouter/modifier un cours
  newCours = { id: 0, matiere: '', nombreHeures: 0 };
  showAddCoursForm = false;

  editingCoursId: number | null = null; // ID du cours en cours de modification
  editingCours = { matiere: '', nombreHeures: 0 };

  searchTerm: string = ''; // Terme de recherche
etudiantsList: any;

  // Fonction pour ouvrir/fermer le formulaire d'ajout
  toggleAddCoursForm() {
    this.showAddCoursForm = !this.showAddCoursForm;
  }

  closeAddCoursForm() {
    this.showAddCoursForm = false;
    this.newCours = { id: 0, matiere: '', nombreHeures: 0 };
  }

  // Ajouter un nouveau cours
  addCours() {
    if (this.newCours.matiere.trim() && this.newCours.nombreHeures > 0) {
      const newId = this.coursList.length > 0 ? Math.max(...this.coursList.map(c => c.id)) + 1 : 1;
      this.coursList.push({ ...this.newCours, id: newId });
      this.filteredCoursList = [...this.coursList]; // Mettre à jour la liste filtrée
      this.closeAddCoursForm();
    }
  }

  // Filtrer les cours en fonction de la recherche
  filterCours() {
    this.filteredCoursList = this.coursList.filter(c =>
      c.matiere.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Modifier un cours
  editCours(coursId: number) {
    const cours = this.coursList.find(c => c.id === coursId);
    if (cours) {
      this.editingCoursId = coursId;
      this.editingCours = { ...cours }; // Cloner le cours pour éviter les modifications directes
    }
  }

  saveCours() {
    if (this.editingCoursId !== null) {
      const index = this.coursList.findIndex(c => c.id === this.editingCoursId);
      if (index !== -1) {
        this.coursList[index] = { id: this.editingCoursId, ...this.editingCours };
        this.filteredCoursList = [...this.coursList]; // Mettre à jour la liste filtrée
      }
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingCoursId = null;
    this.editingCours = { matiere: '', nombreHeures: 0 };
  }

  // Supprimer un cours
  deleteCours(coursId: number) {
    this.coursList = this.coursList.filter(c => c.id !== coursId);
    this.filteredCoursList = [...this.coursList]; // Mettre à jour la liste filtrée
  }

  
  
}
