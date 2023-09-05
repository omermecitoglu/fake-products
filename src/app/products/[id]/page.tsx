import Product from "~/components/Product";
import { getProduct } from "~/core/products";

/**
 * Props for the ProductPage component.
 *
 * @property {Object} params - Parameters for the product page.
 * @property {string} params.id - The ID of the product.
 */

type ProductPageProps = {
  params: {
    id: string,
  },
}

/**
 * Asynchronous function that retrieves a product by ID and renders a Product component.
 *
 * @param {ProductPageProps} params - The parameters containing the product ID.
 * @returns {JSX.Element} The Product component displaying the retrieved product.
 */

const ProductPage = async ({
  params,
}: ProductPageProps) => {
  const product = await getProduct(parseInt(params.id));
  return <Product product={product} />;
};

export default ProductPage;
