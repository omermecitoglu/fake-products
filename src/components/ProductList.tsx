import Link from "next/link";
import type { Product } from "~/core/products";

type ProductListProps = {
  collection: Product[],
};

const ProductList = ({
  collection,
}: ProductListProps) => (
  <ol>
    {collection.map(product =>
      <li key={product.id}>
        <Link href={`/products/${product.id}`}>
          {product.title}
        </Link>
      </li>
    )}
  </ol>
);

export default ProductList;
