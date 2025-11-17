import React, { useState } from "react";
import { Product, Category } from "../types/product";

interface Props {
  onAdd: (product: Product) => void;
}

const ProductForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<Category>("Electronics");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      category,
      isAvailable: true,
    };
    onAdd(newProduct);
    setTitle("");
    setPrice(0);
    setCategory("Electronics");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
        <option value="Books">Books</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
