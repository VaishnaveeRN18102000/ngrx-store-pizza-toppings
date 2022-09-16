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
}
