import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ngIfAnim } from '../animations';
import { DataService } from '../data.service';
import { deepClone, HeroAndLikes } from '../model';

@Component({
  selector: 'app-hero-form-container',
  templateUrl: './hero-form-container.component.html',
  animations: [ngIfAnim],
})
export class HeroFormContainerComponent {
  constructor(private dataService: DataService) {}

  /** Current hero graph straight from cache */
  currentHeroAndLikes$ = this.dataService.currentHeroAndLikes$;

  /** Observable of the ViewModel: a reshaped, cloned, current hero data. */
  vm$ = this.currentHeroAndLikes$.pipe(map((data) => deepClone(data)));

  editing = true;

  /** Index of the selected "Likes" UI implementation */
  selectedUi$ = this.dataService.selectedUi$;

  save(vm: HeroAndLikes) {
    this.dataService.saveHeroAndLikes(vm);
    this.editing = false;
  }

  close() {
    this.editing = false;
  }

  updateSelectedUi(selectedUi: string) {
    this.dataService.updateSelectedUi(selectedUi);
  }
}
