import { PizzasGuard } from "./pizzas.guard";
import { PizzaExistsGuard } from "./pizza-exists.guard";
import { ToppingssGuard } from "./toppings.guard";

export const guards: any[] = [PizzasGuard, PizzaExistsGuard, ToppingssGuard];

export * from './pizzas.guard';
export * from './pizza-exists.guard';
export * from './toppings.guard';