import { Action, createActionGroup, emptyProps, props } from "@ngrx/store";

import { Topping } from "../../models/topping.model";

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';
export const CREATE_TOPPING = '[Products] Create Topping';
export const CREATE_TOPPING_FAIL = '[Products] Create Topping Fail';
export const CREATE_TOPPING_SUCCESS = '[Products] Create Topping Success';
export const UPDATE_TOPPING = '[Products] Update Topping';
export const UPDATE_TOPPING_FAIL = '[Products] Update Topping Fail';
export const UPDATE_TOPPING_SUCCESS = '[Products] Update Topping Success';
export const REMOVE_TOPPING = '[Products] Remove Topping';
export const REMOVE_TOPPING_FAIL = '[Products] Remove Topping Fail';
export const REMOVE_TOPPING_SUCCESS = '[Products] Remove Topping Success';

export const ToppingsAction = createActionGroup({
    source: 'Products',
    events: {
        'Load Toppings': emptyProps(),
        'Load Toppings Fail': props<{ payload: any }>(),
        'Load Toppings Success': props<{ payload: Topping[] }>(),
        'Visualise Toppings': props<{ payload: number[] }>(),
        'Create Topping': props<{ payload: Topping }>(),
        'Create Topping Fail': props<{ payload: any }>(),
        'Create Topping Success': props<{ payload: Topping }>(),
        'Update Topping': props<{ payload: Topping }>(),
        'Update Topping Fail': props<{ payload: any }>(),
        'Update Topping Success': props<{ payload: Topping }>(),
        'Remove Topping': props<{ payload: Topping }>(),
        'Remove Topping Fail': props<{ payload: any }>(),
        'Remove Topping Success': props<{ payload: Topping }>()
    }
});
