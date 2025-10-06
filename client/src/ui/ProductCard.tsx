import React from "react";
import type { ProductProp } from "./ProductList";
import Button from "./Button";

const ProductCard = ({ product }: { product: ProductProp }) => {
  return (
    <div className="p-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-72 h-[420px] flex flex-col">
        {/* Image */}
        <div className="h-40 bg-amber-100 flex items-center justify-center rounded-md mb-3">
          <span className="text-gray-500 text-sm">No Image</span>
        </div>

        {/* Product Info */}
        <div className="px-2">
          <p className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-600 line-clamp-3 px-2 mt-2">
          {product.description}
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 items-center text-sm text-gray-500 mt-3 px-2">
          <p className="truncate">By {product.createdBy}</p>
          <p className="font-bold text-gray-800 text-right">₹{product.price}</p>
        </div>

        {/* Buttons at bottom */}
        <div className="grid grid-cols-2 gap-2 px-2 pb-3 mt-auto">
          <Button type="button" variant="primary">
            Buy
          </Button>
          <Button type="button" variant="secondary">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
