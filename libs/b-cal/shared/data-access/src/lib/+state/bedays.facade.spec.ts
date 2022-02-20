import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as BedaysActions from './bedays.actions';
import { BedaysEffects } from './bedays.effects';
import { BedaysFacade } from './bedays.facade';
import { BedaysEntity } from './bedays.models';
import {
  BEDAYS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './bedays.reducer';
import * as BedaysSelectors from './bedays.selectors';

interface TestSchema {
  bedays: State;
}

describe('BedaysFacade', () => {
  let facade: BedaysFacade;
  let store: Store<TestSchema>;
  const createBedaysEntity = (id: string, name = ''): BedaysEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BEDAYS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BedaysEffects]),
        ],
        providers: [BedaysFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BedaysFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBedays$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBedays$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBedaysSuccess` to manually update list
     */
    it('allBedays$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBedays$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BedaysActions.loadBedaysSuccess({
          bedays: [createBedaysEntity('AAA'), createBedaysEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBedays$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
