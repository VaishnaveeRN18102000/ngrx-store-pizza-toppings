import { Action, createAction, props } from "@ngrx/store";

import { Pizza } from "../../models/pizza.model";

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

// export const LoadPizzas = createAction('[Products] Load Pizzas');

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

// export const LoadPizzasFail = createAction(
//     '[Products] Load Pizzas Fail',
//     props<{ products: any }>()
// );

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}

// export const LoadPizzasFail = createAction(
//   '[Products] Load Pizzas Fail',
//   props<{ products: Pizza[] }>()
// );

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
