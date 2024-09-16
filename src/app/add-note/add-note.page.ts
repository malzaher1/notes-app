import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage {
  note: Note = { id: 0, title: '', content: '', timestamp: new Date() };

  constructor(private noteService: NoteService, private router: Router) {}

  addNote() {
    this.note.id = new Date().getTime(); // I used timestamp as a unique ID
    this.note.timestamp = new Date();  // current time
    this.noteService.addNote(this.note);
    this.router.navigate(['/home']);
  }
}