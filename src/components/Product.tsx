import Image from "next/image";
import React from "react";
import type { Product } from "~/core/products";

const ProductTemplate = (product: Product) => {
  return (
    <div>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductTemplate;
