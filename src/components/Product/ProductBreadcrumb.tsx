"use client";
import Breadcrumb from "react-bootstrap/Breadcrumb";

type ProductBreadcrumbProps = {
  title: string,
  category: string,
};

const ProductBreadcrumb = ({
  title,
  category,
}: ProductBreadcrumbProps) => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/products">
      Products
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      {category}
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      {title}
    </Breadcrumb.Item>
  </Breadcrumb>
);

export default ProductBreadcrumb;
