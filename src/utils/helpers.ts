import { Product } from "../types/product";

// Type Guards
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// دالة للتحقق من Product
export function isProduct(value: any): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "title" in value &&
    "price" in value &&
    "category" in value &&
    "isAvailable" in value
  );
}
