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

export function reducer(
    state = initialState,
    action: fromToppings.ToppingsAction
  ): ToppingsState {
    switch (action.type) {
      case fromToppings.VISUALISE_TOPPINGS: {
        const selectedToppings = action.payload;
        return {
          ...state,
          selectedToppings,
        };
      }

      case fromToppings.LOAD_TOPPINGS: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case fromToppings.LOAD_TOPPINGS_SUCCESS: {
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
  
      case fromToppings.LOAD_TOPPINGS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false,
        };
      }
    }

    return state;
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;

// export const reducer = createReducer(
//     intialState,
//     on(fromToppings.LoadToppings, (state, action) => ({
//         ...state,
//         loading: true
//     })),
//     on(fromToppings.LoadToppingsSuccess, (state, action) => {
//         const toppings = action.toppings;
//         state.entities = toppings.reduce(
//           (entities: { [id: number]: Topping }, topping: Topping) => {
//             return{
//                 ...entities,
//                 [topping.id as number]: topping,
//             };
//           },
//           {
//             ...state.entities
//           }
//         );
//         ...state,
//         loading: false,
//         loaded: true,
//     }),
//     on(fromToppings.LoadToppingsFail, (state, action) => ({
//         ...state,
//         loading: false,
//         loaded: false
//     }))
// )
