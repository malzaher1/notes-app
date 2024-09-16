import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesPage } from './notes.page';
import { AddNotePage } from '../add-note/add-note.page';
import { ViewNotePage } from '../view-note/view-note.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage,
  },
  {
    path: 'add-note',
    component: AddNotePage,
  },
  {
    path: 'view-note/:id',
    component: ViewNotePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesPageRoutingModule {}