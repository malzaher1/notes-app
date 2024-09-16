import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotesPageRoutingModule } from './notes-routing.module';
import { NotesPage } from './notes.page';
import { AddNotePage } from '../add-note/add-note.page';
import { ViewNotePage } from '../view-note/view-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage, AddNotePage, ViewNotePage]
})
export class NotesPageModule {}