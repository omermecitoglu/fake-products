import type { Product } from "~/core/products";
import ProductListBreadcrumb from "./ProductListBreadcrumb";
import ProductListItem from "./ProductListItem";

/**
 * Props for the ProductList component.
 *
 * @property {Product[]} collection - The collection of products to be displayed.
 * @property {boolean} breadcrumb - A boolean flag indicating whether to display breadcrumbs.
 */

type ProductListProps = {
  collection: Product[],
  breadcrumb: boolean,
};

/**
 * The ProductList component for displaying a list of products.
 *
 * @param {ProductListProps} props - The props for the ProductList component.
 * @returns {JSX.Element} The JSX element representing the ProductList component.
 */

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
