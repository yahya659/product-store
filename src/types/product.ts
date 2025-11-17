// src/types/product.ts

// Literal Type للفئات
export type Category = "Electronics" | "Clothes" | "Books";

// Interface للمنتج
export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: Category;
  isAvailable: boolean;
}

// Utility Types
export type ProductPreview = Pick<Product, "id" | "title" | "price">;
export type ProductUpdate = Partial<Product>;
export type ReadonlyProduct = Readonly<Product>;
