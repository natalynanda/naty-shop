import { Item } from "./Item";

export interface Order {
    date: Date,
    products: Item[],
    totalProducts: number,
    totalPrice: number
  }