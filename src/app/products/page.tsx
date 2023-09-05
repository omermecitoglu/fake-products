import ProductList from "~/components/ProductList";
import { getProducts } from "~/core/products";

/**
 * Asynchronous function that retrieves products and renders a ProductList component.
 *
 * @returns {JSX.Element} The ProductList component displaying the retrieved products.
 */

const ProductListPage = async () => {
  const products = await getProducts();
  return <ProductList collection={products} breadcrumb={true} />;
};

export default ProductListPage;
