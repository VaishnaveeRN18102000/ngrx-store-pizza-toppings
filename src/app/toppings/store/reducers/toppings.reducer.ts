import { createReducer, on } from '@ngrx/store';

import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loaded: boolean;
    loading: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: [],
}

export const reducer = createReducer(
  initialState,
  on(
    fromToppings.ToppingsAction.loadToppings,
    (state) => ({ ...state, loading: true })
  ),
  on(
    fromToppings.ToppingsAction.loadToppingsSuccess,
    (state, action) => {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return{
              ...entities,
              [topping.id as number]: topping,
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  ),
  on(
    fromToppings.ToppingsAction.loadToppingsFail,
    (state) => ({ ...state, loaded: false, loading: false })
  ),
  on(
    fromToppings.ToppingsAction.visualiseToppings,
    (state, action) => {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      };
    }
  ),
  on(
    fromToppings.ToppingsAction.createToppingSuccess,
    fromToppings.ToppingsAction.updateToppingSuccess,
    (state, action) => {
      const topping = action.payload;
      const entities = {
        ...state.entities,
        [topping.id as number]: topping,
      };
      return {
        ...state,
        entities
      }
    }
  ),
  on(
    fromToppings.ToppingsAction.removeToppingSuccess,
    (state, action) => {
      const topping = action.payload;
      const { [topping.id as number]: removedTopping, ...entities} = state.entities;
      return {
        ...state,
        entities
      };
    }
  )
);

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
