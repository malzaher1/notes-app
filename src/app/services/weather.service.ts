import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = '90f611bb67f74d7c928122630242509'; 

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(url);
  }
}