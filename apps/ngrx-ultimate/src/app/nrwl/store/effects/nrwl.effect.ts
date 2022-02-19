import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { navigation } from '@nrwl/angular';
import { tap } from 'rxjs/operators';

import { ParentComponent } from '../../containers';
import { DrinkService } from '../../../drinks/services/drink.service';
import { distinctRouteParam } from '../../../shared/utilities';

// type foo = ActionType<rou
@Injectable()
export class NrwlEffects {
  loadSomething$ = createEffect(() =>
    this.actions$.pipe(
      // listens for the routerNavigation action from @ngrx/router-store
      navigation(ParentComponent, {
        run: (snapshot: ActivatedRouteSnapshot) => {
          console.log('ParentComponent navigated');
          console.log(snapshot.params);
        },
        onError: (snapshot: ActivatedRouteSnapshot, error: any) => {
          // we can log and error here and return null
          // we can also navigate back
          return null;
        },
      })
    )
  );

  navigationTestOne$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        distinctRouteParam('paramOne'),
        tap((params) => console.log(params['paramOne']))
      ),
    { dispatch: false }
  );

  navigationTestTwo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        distinctRouteParam('paramTwo'),
        tap((params) => console.log(params['paramTwo']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private drinkService: DrinkService
  ) {}
}