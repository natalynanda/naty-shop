import { Item } from "../Models/Item";

export const totalPrice = (products: Item[] | undefined) => {
    if(!products) {
        return 0;
    }
    return products.reduce((acc, product) => acc + product.price, 0);
}