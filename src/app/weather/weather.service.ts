import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class cityWeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  weatherForCity(city: string): Observable<any> {
    return this.http.get(`${this.url}?q=${city}&appid=${this.params.APPID}&units=${this.params.units}`)
  }
}
 