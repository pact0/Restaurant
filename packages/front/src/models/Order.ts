import { Product } from "@models/Product";

export interface Order {
    id: string;
    price: string;
    image: string;
    items: Array<Product>;
    date: string;
  }
  