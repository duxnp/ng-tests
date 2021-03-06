import { PizzaDisplayComponent } from './pizza-display/pizza-display.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any[] = [
  PizzaItemComponent,
  PizzaFormComponent,
  PizzaDisplayComponent,
  PizzaToppingsComponent,
];

export * from './pizza-item/pizza-item.component';
export * from './pizza-form/pizza-form.component';
export * from './pizza-display/pizza-display.component';
export * from './pizza-toppings/pizza-toppings.component';
