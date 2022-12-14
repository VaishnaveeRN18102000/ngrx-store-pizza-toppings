import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable, tap, filter, take, switchMap, catchError, of } from "rxjs";

import * as fromStore from '../../products/store';

@Injectable()
export class ToppingsGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) {}
    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false)),
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getToppingsLoaded).pipe(
            tap(loaded => {
                if(!loaded){
                    this.store.dispatch(fromStore.ToppingsAction.loadToppings());
                }
            }),
            filter(loaded => loaded),
            take(1),
        );
    }
}