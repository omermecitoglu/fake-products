"use client";
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";

const ProductListBreadcrumb = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Products
    </Breadcrumb.Item>
  </Breadcrumb>
);

export default ProductListBreadcrumb;
