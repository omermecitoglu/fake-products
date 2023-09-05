import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Price from "~/components/Price";
import type { Product } from "~/core/products";
import styles from "./ProductListItem.module.scss";

/**
 * Props for the ProductListItem component.
 *
 * @property {Product} product - The product data to be displayed.
 */

type ProductListItemProps = {
  product: Product,
};

/**
 * The ProductListItem component for displaying individual product items.
 *
 * @param {ProductListItemProps} props - The props for the ProductListItem component.
 * @returns {JSX.Element} The JSX element representing the ProductListItem component.
 */

const ProductListItem = ({
  product,
}: ProductListItemProps) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
      <Link href={`/products/${product.id}`} className="mb-3">
        <div className={classNames(styles.productThumbnail, "pb-3")}>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            className={styles.productImage}
          />
        </div>
      </Link>
      <div className="py-2">
        <p className="text-muted text-sm mb-1">{product.category}</p>
        <h3 className="h6 text-uppercase mb-1">
          <Link href={`/products/${product.id}`} className="text-dark">
            {product.title}
          </Link>
        </h3>
        <span className="text-muted">
          <Price value={product.price} />
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
