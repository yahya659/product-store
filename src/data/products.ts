// src/data/products.ts
import { Product } from "../types/product";

export const productsData: Product[] = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    description: "Powerful laptop",
    category: "Electronics",
    isAvailable: true
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 25,
    description: "Cotton T-Shirt",
    category: "Clothes",
    isAvailable: true
  },
  {
    id: 3,
    title: "Book: TypeScript Guide",
    price: 30,
    description: "Learn TypeScript",
    category: "Books",
    isAvailable: false
  }
];
