import { Category } from "./Category";

export interface Item {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
  }