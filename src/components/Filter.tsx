import React from "react";
import { Product, Category } from "../types/product";

interface Props {
  products: Product[];
  category: Category | "All";
  onCategoryChange: (category: Category | "All") => void;
}

const Filter: React.FC<Props> = ({ products, category, onCategoryChange }) => {
  const categories: (Category | "All")[] = ["All", "Electronics", "Clothes", "Books"];

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Filter by Category:</h3>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          style={{
            margin: "5px",
            backgroundColor: cat === category ? "lightblue" : "white",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filter;
