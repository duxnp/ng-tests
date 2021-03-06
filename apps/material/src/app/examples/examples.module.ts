import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { DatatableComponent } from './datatable/datatable.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { IconsComponent } from './icons/icons.component';
import { InputsComponent } from './inputs/inputs.component';
import { LoadingComponent } from './loading/loading.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';

@NgModule({
  imports: [SharedModule, ExamplesRoutingModule],
  declarations: [
    ExamplesComponent,
    SidenavComponent,
    ToolbarsComponent,
    IconsComponent,
    InputsComponent,
    LoadingComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    DatatableComponent,
  ],
  providers: [],
})
export class ExamplesModule {}
