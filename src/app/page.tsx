import ProductList from "~/components/ProductList";
import { getProducts } from "~/core/products";

/**
 * Asynchronous function that retrieves and displays a list of products on the home page.
 *
 * @returns {JSX.Element} The JSX element displaying the list of products.
 */

const HomePage = async () => {
  const products = await getProducts();
  const displayedProducts = products.slice(0, 10);
  return <ProductList collection={displayedProducts} breadcrumb={false} />;
};

export default HomePage;
