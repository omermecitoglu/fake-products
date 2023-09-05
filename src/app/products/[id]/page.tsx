import Product from "~/components/Product";
import { getProduct } from "~/core/products";

type ProductPageProps = {
  params: {
    id: string,
  },
}

const ProductPage = async ({
  params,
}: ProductPageProps) => {
  const product = await getProduct(parseInt(params.id));
  return <Product product={product} />;
};

export default ProductPage;
