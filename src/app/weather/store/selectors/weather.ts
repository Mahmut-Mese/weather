import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from "../reducers/weather";

export const weatherCities = createFeatureSelector<State>('weather');

export const fetchCitiesWeather = createSelector(
  weatherCities,
  (state: State) => state?.cities
)


