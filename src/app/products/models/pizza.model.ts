import { Topping } from "../../toppings/models/topping.model";

export interface Pizza {
    id?: number,
    name?: string;
    toppings?: Topping[];
}
