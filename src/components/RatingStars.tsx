import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

type RatingStarsProps = {
  rate: number,
  count: number,
};

const RatingStars = ({
  rate,
  count,
}: RatingStarsProps) => {
  const stars = Array(5).fill(null).map((n, i) => i + 1);

  const starColor = (starIndex: number) => {
    const colorVariant = Math.round(rate) >= (starIndex) ? "primary" : "secondary";
    return `text-${colorVariant}`;
  };

  return (
    <div className="d-flex align-items-center">
      <ul className="list-inline me-2 mb-0">
        {stars.map(star =>
          <li key={star} className={classNames("list-inline-item me-0", starColor(star))}>
            <FontAwesomeIcon icon={faStar} size="lg" className="fa-fw" />
          </li>
        )}
      </ul>
      <span className="text-muted text-uppercase text-sm">
        {count} {count === 1 ? "review" : "reviews"}
      </span>
    </div>
  );
};

export default RatingStars;
