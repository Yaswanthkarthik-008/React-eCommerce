import React from "react";
import "./ProductsPage.css";
import ProductsSidebar from "./ProductsSidebar";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductsSidebar />

      <ProductsList />
      <section className="products_list_sction">Product List</section>
    </section>
  );
};

export default ProductsPage;
