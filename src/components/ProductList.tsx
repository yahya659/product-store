// src/components/ProductList.tsx
import React from "react";
import { Product } from "../types/product";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updated: Partial<Product>) => void;
}

const ProductList: React.FC<Props> = ({ products, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((p) => (
         <div
    key={p.id}
    style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "5px",
      backgroundColor: p.isAvailable ? "#d4edda" : "#f8d7da", // أخضر متاح / أحمر غير متاح
    }}
  >
          <h3>{p.title}</h3>
          <p>Price: ${p.price}</p>
          <p>Category: {p.category}</p>
          <p>{p.isAvailable ? "Available" : "Out of stock"}</p>
          <button onClick={() => onDelete(p.id)}>Delete</button>
          <button onClick={() => onUpdate(p.id, { price: p.price + 10 })}>Increase Price</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
