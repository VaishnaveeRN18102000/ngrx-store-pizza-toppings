import { PizzasEffects } from "./pizzas.effect";
import { ToppingsEffects } from "../../../toppings/store/effects/toppings.effect";

export const effects: any[] = [PizzasEffects, ToppingsEffects];

export * from './pizzas.effect';
export * from '../../../toppings/store/effects/toppings.effect';