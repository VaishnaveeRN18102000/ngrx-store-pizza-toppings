import { ActionReducerMap } from '@ngrx/store';
import { PizzasAction } from '../actions/pizzas.action';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState, PizzasAction> = {
  pizzas: fromPizzas.reducer,
};