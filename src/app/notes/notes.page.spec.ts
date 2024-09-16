// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { IonicModule } from '@ionic/angular';
// import { NotesPage } from './notes.page';
// import { NoteService } from '../services/note.service';
// import { of } from 'rxjs';

// describe('NotesPage', () => {
//   let component: NotesPage;
//   let fixture: ComponentFixture<NotesPage>;
//   let noteServiceSpy: jasmine.SpyObj<NoteService>;

//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('NoteService', ['getNotes']);

//     await TestBed.configureTestingModule({
//       declarations: [NotesPage],
//       imports: [IonicModule.forRoot()],
//       providers: [
//         { provide: NoteService, useValue: spy }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(NotesPage);
//     component = fixture.componentInstance;
//     noteServiceSpy = TestBed.inject(NoteService) as jasmine.SpyObj<NoteService>;
//     noteServiceSpy.getNotes.and.returnValue(of([])); // Mocking the getNotes method
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have notes array', () => {
//     expect(component.notes).toBeDefined();
//   });

//   it('should call getNotes on initialization', () => {
//     expect(noteServiceSpy.getNotes.calls.count()).toBe(1);
//   });
// });