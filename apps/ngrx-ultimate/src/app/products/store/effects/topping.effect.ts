import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.action'
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {

  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) { }

  loadToppings$ = createEffect(() => this.actions$.pipe(
      ofType(toppingsActions.LOAD_TOPPINGS),
      switchMap(() => this.toppingsService.getToppings().pipe(
        map(toppings => ({ type: toppingsActions.LOAD_TOPPINGS_SUCCESS, payload: toppings })),
        catchError(error => of({ type: toppingsActions.LOAD_TOPPINGS_FAIL, payload: error }))
      ))
    )
  );

}