import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
openEditNoteModal(_t22: number) {
throw new Error('Method not implemented.');
}
  // Liste des notes (exemple de données)
  notesList: any[] = [
    { nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@mail.com', classe: '1ère', matiere: 'Mathématiques', note: 15 },
    { nom: 'Martin', prenom: 'Marie', email: 'marie.martin@mail.com', classe: '2ème', matiere: 'Français', note: 18 },
    { nom: 'Doe', prenom: 'John', email: 'john.doe@mail.com', classe: '3ème', matiere: 'Anglais', note: 12 },
    // Ajoutez d'autres étudiants ici
  ];

  filteredNotes: any[] = [...this.notesList];  // Liste filtrée des notes
  newNote = { nom: '', prenom: '', email: '', classe: '', matiere: '', note: null }; // Objet pour une nouvelle note
  searchQuery = '';  // La chaîne de recherche

  constructor() { }

  ngOnInit(): void {
    // Vous pouvez ici récupérer les notes depuis un service API ou le localStorage si nécessaire.
  }

  // Fonction pour filtrer les notes en fonction de la recherche
  filterNotes() {
    this.filteredNotes = this.notesList.filter(note => {
      return (
        note.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        note.prenom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        note.matiere.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        note.classe.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }

  // Ouvrir la popup pour ajouter une note
  openAddNoteModal() {
    // Initialiser le formulaire avant d'afficher la modale
    this.newNote = { nom: '', prenom: '', email: '', classe: '', matiere: '', note: null };
    const addNoteModal = new window.bootstrap.Modal(document.getElementById('addNoteModal') as HTMLElement);
    addNoteModal.show();
  }

  // Ajouter une note à la liste
  addNote() {
    // Ajout de la nouvelle note à la liste
    this.notesList.push({ ...this.newNote });
    this.filterNotes(); // Refiltrer les notes

    // Sauvegarder dans le localStorage ou envoyer à un backend
    localStorage.setItem('notesList', JSON.stringify(this.notesList));

    // Fermer la popup
    const addNoteModal = new window.bootstrap.Modal(document.getElementById('addNoteModal') as HTMLElement);
    addNoteModal.hide();
  }

  // Supprimer une note
  deleteNote(index: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette note ?")) {
      this.notesList.splice(index, 1);
      this.filterNotes(); // Refiltrer les notes après suppression
      localStorage.setItem('notesList', JSON.stringify(this.notesList));
    }
  }
}
