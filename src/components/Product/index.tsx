import Image from "next/image";
import React from "react";
import Price from "~/components/Price";
import RatingStars from "~/components/RatingStars";
import type { Product } from "~/core/products";
import styles from "./Product.module.scss";
import ProductBreadcrumb from "./ProductBreadcrumb";

type ProductTemplateProps = {
  product: Product,
};

const ProductTemplate = ({
  product,
}: ProductTemplateProps) => {
  return (
    <div className="row">
      <div className="d-block d-md-none">
        <ProductBreadcrumb title={product.title} category={product.category} />
      </div>
      <div className="col-md-6">
        <Image
          className={styles.productImage}
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          style={{ width: "auto", height: "auto" }}
          priority={true}
        />
      </div>
      <div className="col-md-6">
        <div className="d-none d-md-block">
          <ProductBreadcrumb title={product.title} category={product.category} />
        </div>
        <h1 className="mb-4">{product.title}</h1>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
          <ul className="list-inline mb-2 mb-sm-0">
            <li className="list-inline-item h4 fw-light mb-0">
              <Price value={product.price} />
            </li>
            {product.originalPrice && product.originalPrice !== product.price &&
              <li className="list-inline-item text-muted fw-light">
                <del>
                  <Price value={product.originalPrice} />
                </del>
              </li>
            }
          </ul>
          <RatingStars rate={product.rating.rate} count={product.rating.count} />
        </div>
        <p className="text-muted mb-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductTemplate;
