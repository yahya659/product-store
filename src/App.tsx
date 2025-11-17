

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { productsData } from "./data/products";
import { Category, Product } from "./types/product";
import Filter from "./components/Filter";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [filterCategory, setFilterCategory] = useState<Category | "All">("All");
  function addProduct(newProduct: Product) {
    setProducts((prev) => [...prev, newProduct]);
  }
  function updateProduct(id: number, updated: Partial<Product>) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  }
  const filteredProducts =
    filterCategory === "All"
      ? products
      : products.filter((p) => p.category === filterCategory);

  function deleteProduct(id: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="App">
      <h1>My Product Store</h1>
      <ProductList
        products={filteredProducts}
        onDelete={deleteProduct}
        onUpdate={updateProduct}
      />
      <Filter
        products={products}
        category={filterCategory}
        onCategoryChange={setFilterCategory}
      />
      <ProductForm onAdd={addProduct} />
    </div>
  );
}

export default App;
