import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, exhaustMap, tap } from 'rxjs';

import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../../toppings/models/topping.model';

@Component({
  selector: 'product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)"
      >
        <pizza-display [pizza]="visualise$ | async"> </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza> | null | undefined;
  visualise$: Observable<Pizza> | null | undefined;
  toppings$: Observable<Topping[]> | null | undefined;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((pizza: Pizza | null = null) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists ? pizza.toppings?.map(topping => topping.id) : [];
        this.store.dispatch(fromStore.ToppingsAction.visualiseToppings({ payload: toppings as number[] }));
      })
    ) as Observable<Pizza>;
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
  }

  onSelect(event: number[]) {
    this.store.dispatch(fromStore.ToppingsAction.visualiseToppings({ payload: event }));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store.dispatch(new fromStore.RemovePizza(event));
    }
  }
}
