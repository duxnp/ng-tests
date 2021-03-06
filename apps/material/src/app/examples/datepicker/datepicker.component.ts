import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

// import DateTime from 'luxon';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  public startDate = new Date(2018, 0, 1);
  public minDate = new Date(2018, 0, 1);
  public maxDate = new Date(2018, 0, 25);

  constructor(private _platform: Platform) {}

  // Used to present the mobile version of the date picker
  // Use along with @angular/material-luxon-adapter
  get isTouchDevice() {
    return this._platform.ANDROID || this._platform.IOS;
    // return true;
  }
}
