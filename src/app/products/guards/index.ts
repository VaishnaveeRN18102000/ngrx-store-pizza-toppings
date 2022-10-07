import { PizzasGuard } from "./pizzas.guard";
import { PizzaExistsGuard } from "./pizza-exists.guard";
import { ToppingsGuard } from "../../toppings/guards/toppings.guard";

export const guards: any[] = [PizzasGuard, PizzaExistsGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './pizza-exists.guard';
export * from '../../toppings/guards/toppings.guard';