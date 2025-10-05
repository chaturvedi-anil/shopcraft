import React from "react";

type ProductProp = {
  name: string;
  price: number;
  description: string;
  category: string;
};
const ProductList = ({ products }: { products: ProductProp[] }) => {
  return <div>ProductList</div>;
};

export default ProductList;
