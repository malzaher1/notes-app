import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  note: Note | undefined;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {}

  ngOnInit() {
    const noteId = +this.route.snapshot.paramMap.get('id')!;
    this.note = this.noteService.getNoteById(noteId);
  }

  goBack() {
    this.location.back();
  }

  toggleEdit() {
    if (this.isEditing && this.note) {
      this.noteService.updateNote(this.note);
    }
    this.isEditing = !this.isEditing;
  }
}