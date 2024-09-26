import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';
import { Location } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  // note: Note | undefined;
  note: Note = { id: 0, title: '', content: '', photo: '' }; // Initialize the note object
  city: string = 'Jeddah'; 
  weather: any; 

  // showFullContent: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private weatherService: WeatherService


  ) {}

  // ngOnInit() {
  //   const noteId = +this.route.snapshot.paramMap.get('id')!;
  //   this.note = this.noteService.getNoteById(noteId);
  // }

  ngOnInit() {
    const noteIdParam = this.route.snapshot.paramMap.get('id');
    if (noteIdParam) {
      const noteId = +noteIdParam;
      const fetchedNote = this.noteService.getNoteById(noteId);
      if (fetchedNote) {
        this.note = fetchedNote;
        this.fetchWeather(this.city);

      }
    }
  }

  goBack() {
    this.location.back();
  }


  // Use camera to take a photo then add it to the note
  async addPhoto() {
    if (this.note?.id) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
        // source: Capacitor.getPlatform() === 'web' ? CameraSource.Prompt : CameraSource.Camera
      });

      if (image.webPath) {
        await this.noteService.addPhotoToNote(this.note.id, image.webPath);
        const updatedNote = this.noteService.getNoteById(this.note.id);
        if (updatedNote) {
          this.note = updatedNote; // Refresh the note to display the photo
        }
      }
    }
  }

  // Add a photo from the photos gallery
  async addPhotoFromGallery() {
    if (this.note?.id) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });

      if (image.webPath) {
        await this.noteService.addPhotoToNote(this.note.id, image.webPath);
        const updatedNote = this.noteService.getNoteById(this.note.id);
        if (updatedNote) {
          this.note = updatedNote; // Refresh the note to display the photo
        }
      }
    }
  }

  saveNote() {
    if (this.note) {
      this.noteService.updateNote(this.note);
    }
  }


  // fetchWeather(city: string) {
  //   this.weatherService.getCurrentWeather(city).subscribe(data => {
  //     this.weather = data;
  //   }, error => {
  //     console.error('Error fetching weather data', error);
  //   });
  // }

  fetchWeather(city: string) {
    console.log(`Fetching weather for city: ${city}`); // Log the city
    this.weatherService.getCurrentWeather(city).subscribe(data => {
      this.weather = data;
      console.log('Weather data:', JSON.stringify(this.weather, null, 2)); // Log the weather data
    }, error => {
      console.error('Error fetching weather data', error);
    });
  }


}