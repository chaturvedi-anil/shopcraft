import React from "react";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";
import ProductList from "../ui/ProductList";

const products = [];
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Navbar />
      <main className="py-8 grid">
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default HomePage;
