import ProductList from "~/components/ProductList";
import { getProducts } from "~/core/products";

const HomePage = async () => {
  const products = await getProducts();
  const displayedProducts = products.slice(0, 10);
  return <ProductList collection={displayedProducts} breadcrumb={false} />;
};

export default HomePage;
