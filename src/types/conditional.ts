// Conditional Type بسيط
export type IsString<T> = T extends string ? "YES" : "NO";



// Conditional Type مع المنتجات
export type ProductStatus<T extends { isAvailable: boolean }> = T["isAvailable"] extends true ? "In Stock" : "Out of Stock";
