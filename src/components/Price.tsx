"use client";
import React, { useMemo } from "react";
import { convertCurrency } from "~/core/currency";
import { useAppSelector } from "~/redux/hooks";
import { useGetCurrencyDataQuery } from "~/redux/services/currencyApi";

type PriceProps = {
  value: number,
};

const Price = ({
  value,
}: PriceProps) => {
  const currency = useAppSelector(state => state.currency.selected);
  const { isLoading, isFetching, data, error } = useGetCurrencyDataQuery(null);

  const nf = useMemo(() => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }), [currency]);

  if (isLoading || isFetching) {
    return <span className="text-success">Loading...</span>;
  }

  if (error) {
    return <span className="text-danger">{nf.format(0).replace("0", "???")}</span>;
  }

  const convertedPrice = data ? convertCurrency(value, "USD", currency, data.rates) : value;

  return <>{nf.format(convertedPrice)}</>;
};

export default Price;
