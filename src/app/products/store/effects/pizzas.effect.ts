import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable() 
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {};

    @Effect()
    loadPizzas$ = this.actions$.pipe(
        ofType(pizzaActions.LOAD_PIZZAS),
        switchMap(() => {
            return this.pizzaService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
            );
        })
    );

    @Effect()
    createPizza$ = this.actions$.pipe(
        ofType(pizzaActions.CREATE_PIZZA),
        map((action: pizzaActions.CreatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.createPizza(pizza).pipe(
                map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
            );
        })
    );

    @Effect()
    updatePizza$ = this.actions$.pipe(
        ofType(pizzaActions.UPDATE_PIZZA),
        map((action: pizzaActions.UpdatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.updatePizza(pizza).pipe(
                map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
            );
        })
    );

    @Effect()
    removePizza$ = this.actions$.pipe(
        ofType(pizzaActions.REMOVE_PIZZA),
        map((action: pizzaActions.RemovePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.removePizza(pizza).pipe(
                map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
            );
        })
    );
}
