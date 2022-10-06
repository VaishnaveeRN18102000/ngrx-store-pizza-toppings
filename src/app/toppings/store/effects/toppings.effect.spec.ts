import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, empty, of } from 'rxjs';

import { ToppingsService } from '../../services/toppings.service';
import * as fromEffects from './toppings.effect';
import * as fromActions from '../actions/toppings.action';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('ToppingsEffects', () => {
  let actions$: TestActions;
  let service: ToppingsService;
  let effects: fromEffects.ToppingsEffects;

  const toppings = [
    { id: 1, name: 'onion' },
    { id: 2, name: 'mushroom' },
    { id: 3, name: 'basil' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ToppingsService,
        fromEffects.ToppingsEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ToppingsService);
    effects = TestBed.get(fromEffects.ToppingsEffects);

    spyOn(service, 'getToppings').and.returnValue(of(toppings));
  });

  describe('loadTopping$', () => {
    it('should return a collection from loadToppingsSuccess', () => {
      const action = fromActions.pizzaToppingsActions.loadToppings();
      const completion = fromActions.pizzaToppingsActions.loadToppingsSuccess({ payload: toppings });

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadTopping$).toBeObservable(expected);
    });
  });

  describe('createTopping$', () => {
    it('should create a topping', () => {
      const action = fromActions.pizzaToppingsActions.createTopping({ payload: toppings[0] });
      const completion = fromActions.pizzaToppingsActions.createToppingSuccess({ payload: toppings[0] });

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.createTopping$).toBeObservable(expected);
    });
  });

  describe('updateTopping$', () => {
    it('should update a topping', () => {
      const action = fromActions.pizzaToppingsActions.updateTopping({ payload: toppings[0] });
      const completion = fromActions.pizzaToppingsActions.updateToppingSuccess({ payload: toppings[0] });

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.createTopping$).toBeObservable(expected);
    });
  });

  describe('removeTopping$', () => {
    it('should delete a topping', () => {
      const action = fromActions.pizzaToppingsActions.removeTopping({ payload: toppings[0] });
      const completion = fromActions.pizzaToppingsActions.removeToppingSuccess({ payload: toppings[0] });

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.createTopping$).toBeObservable(expected);
    });
  });
});