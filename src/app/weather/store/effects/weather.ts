import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {  Success, Error } from '../actions/weather';
import { cityWeatherService } from '../../weather.service';
import * as searchActions from '../actions/weather';


@Injectable()
export class SearchEffect {

constructor(private searchActions$: Actions, private cityWeatherService: cityWeatherService) {}
  weather$: Observable<Action> = createEffect(() => 
    this.searchActions$.pipe(
      ofType(searchActions.SearchCity),
      mergeMap((action: any) => {
        return this.cityWeatherService.weatherForCity(action.city)
          .pipe(
         map((payload: any) => Success({ payload })),
            catchError((error: string) => of(Error({ error })))
          );
      }
    )
  ))
 
}
 
    