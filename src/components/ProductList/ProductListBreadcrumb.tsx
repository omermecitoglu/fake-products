"use client";
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";

/**
 * The ProductListBreadcrumb component for displaying breadcrumb navigation in the product list.
 *
 * @returns {JSX.Element} The JSX element representing the ProductListBreadcrumb component.
 */

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
