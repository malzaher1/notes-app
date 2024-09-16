import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  notes: Note[];

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }
}

