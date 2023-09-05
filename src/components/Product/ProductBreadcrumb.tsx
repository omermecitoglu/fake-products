"use client";
import Breadcrumb from "react-bootstrap/Breadcrumb";

/**
 * Props for the ProductBreadcrumb component.
 *
 * @property {string} title - The title of the product.
 * @property {string} category - The category of the product.
 */

type ProductBreadcrumbProps = {
  title: string,
  category: string,
};

/**
 * The ProductBreadcrumb component for displaying breadcrumb navigation.
 *
 * @param {ProductBreadcrumbProps} props - The props for the ProductBreadcrumb component.
 * @returns {JSX.Element} The JSX element representing the ProductBreadcrumb component.
 */

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
