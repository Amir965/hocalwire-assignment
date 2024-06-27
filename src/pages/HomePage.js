import React from "react";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <div className="p-4">
        <CategoryFilter />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
