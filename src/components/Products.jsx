import React from "react";

import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="p-5 flex flex-wrap justify-between">
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
