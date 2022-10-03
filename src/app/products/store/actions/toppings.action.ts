import { Action, createAction, props } from "@ngrx/store";

import { Topping } from "../../../toppings/models/topping.model";

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any){}
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]){}
}

export class VisualiseToppings implements Action {
    readonly type = VISUALISE_TOPPINGS;
    constructor(public payload: number[]){}
}

// export const LoadToppings = createAction(LOAD_TOPPINGS);
// export const LoadToppingsFail = createAction(LOAD_TOPPINGS_FAIL, props<{ toppings: any }>());
// export const LoadToppingsSuccess = createAction(LOAD_TOPPINGS_SUCCESS, props<{ toppings: Topping[] }>());

// action types
export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualiseToppings;