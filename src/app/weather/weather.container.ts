import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchCity } from './store/actions/weather';
import { fetchCitiesWeather } from './store/selectors/weather';


@Component({
  selector: 'app-weather',
  template: `
    <app-search (searchEmit)='citySearch($event)' ></app-search>
    <app-results [citiesWeather]='weather$ | async'></app-results>
  `
})
export class WeatherContainer {
  weather$: Observable<any>;

  constructor(private searchStore: Store) {
    this.weather$ = this.searchStore.select<any>(fetchCitiesWeather);
   }

  citySearch(city: any) {
    this.searchStore.dispatch(SearchCity({city}));
  }
}
