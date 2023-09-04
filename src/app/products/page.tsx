import ProductList from "~/components/ProductList";
import { getProducts } from "~/core/products";

type ProductListPageProps = {
  limit?: number,
};

const ProductListPage = async ({
  limit,
}: ProductListPageProps) => {
  const products = await getProducts();
  const displayedProducts = products.slice(0, limit);
  return <ProductList collection={displayedProducts} />;
};

export default ProductListPage;
