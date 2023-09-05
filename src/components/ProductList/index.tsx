import type { Product } from "~/core/products";
import ProductListBreadcrumb from "./ProductListBreadcrumb";
import ProductListItem from "./ProductListItem";

type ProductListProps = {
  collection: Product[],
  breadcrumb: boolean,
};

const ProductList = ({
  collection,
  breadcrumb,
}: ProductListProps) => (
  <div>
    {breadcrumb && <ProductListBreadcrumb />}
    <div className="row">
      {collection.map(product =>
        <ProductListItem key={product.id} product={product} />
      )}
    </div>
  </div>
);

export default ProductList;
