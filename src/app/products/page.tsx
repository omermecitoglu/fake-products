import ProductList from "~/components/ProductList";
import { getProducts } from "~/core/products";

const ProductListPage = async () => {
  const products = await getProducts();
  return <ProductList collection={products} breadcrumb={true} />;
};

export default ProductListPage;
