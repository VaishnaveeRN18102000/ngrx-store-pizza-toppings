import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, map, catchError, switchMap } from "rxjs";

import * as toppingsActions from '../../../toppings/store/actions/toppings.action';
import * as fromServices from '../../../toppings/services/toppings.service';

@Injectable()
export class ToppingsEffects {
    constructor(private actions$: Actions, private toppingsService: fromServices.ToppingsService) {}

    loadTopping$ = createEffect(
        () => this.actions$.pipe(
            ofType(toppingsActions.LOAD_TOPPINGS),
            switchMap(() => {
                return this.toppingsService
                .getToppings()
                .pipe(
                    map(toppings => toppingsActions.ToppingsAction.loadToppingsSuccess({payload: toppings})),
                    catchError(error => of(toppingsActions.ToppingsAction.loadToppingsFail({ payload: error })))
                )
            })
        )
    );

    createTopping$ = createEffect(
        () => this.actions$.pipe(
            ofType(toppingsActions.CREATE_TOPPING),
            switchMap(topping => {
                return this.toppingsService.createTopping(topping).pipe(
                    map(topping => toppingsActions.ToppingsAction.createToppingSuccess({ payload: topping })),
                    catchError(error => of(toppingsActions.ToppingsAction.createToppingFail({ payload: error })))
                );
            })
        )
    );

    updateTopping$ = createEffect(
        () => this.actions$.pipe(
            ofType(toppingsActions.UPDATE_TOPPING),
            switchMap(topping => {
                return this.toppingsService.updateTopping(topping).pipe(
                    map(topping => toppingsActions.ToppingsAction.updateToppingSuccess({ payload: topping })),
                    catchError(error => of(toppingsActions.ToppingsAction.updateToppingFail({ payload: error })))
                )
            })
        )
    );

    removeTopping$ = createEffect(
        () => this.actions$.pipe(
            ofType(toppingsActions.REMOVE_TOPPING),
            switchMap(topping => {
                return this.toppingsService.removeTopping(topping).pipe(
                    map(() => toppingsActions.ToppingsAction.removeToppingSuccess({ payload: topping })),
                    catchError(error => of(toppingsActions.ToppingsAction.removeToppingFail({ payload: error })))
                )
            })
        )
    );
}