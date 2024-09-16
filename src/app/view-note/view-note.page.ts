import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  note: Note | undefined;

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
}