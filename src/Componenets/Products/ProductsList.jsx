import React, { useEffect, useState } from "react";

import apiClient from "../../utils/api-client";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import { setErrorMap } from "zod";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => set(err.message));
  }, []);

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="products_list">
        {products.map((product) => (
          <ProductCard key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
