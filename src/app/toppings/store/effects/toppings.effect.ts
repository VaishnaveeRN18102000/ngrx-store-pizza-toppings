import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, map, catchError, switchMap } from "rxjs";

import * as toppingsActions from '../../../toppings/store/actions/toppings.action';
import * as fromServices from '../../../toppings/services/toppings.service';

@Injectable()
export class ToppingsEffects {
    constructor(private actions$: Actions, private toppingsService: fromServices.ToppingsService) {}

    @Effect()
    loadTopping$ = this.actions$.pipe(
        ofType(toppingsActions.LOAD_TOPPINGS),
        switchMap(() => {
            return this.toppingsService
            .getToppings()
            .pipe(
                map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
                catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
            )
        })
    )
}