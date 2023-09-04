import ProductListPage from "./products/page";

const HomePage = async () => {
  return <ProductListPage limit={10} />;
};

export default HomePage;
