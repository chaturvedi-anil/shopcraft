import React from "react";
import ProductCard from "./ProductCard";

export type ProductProp = {
  name: string;
  price: number;
  description: string;
  category: string;
  createdBy: number;
};

const ProductList = ({ products }: { products: ProductProp[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
