"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import { currencyIcon } from "~/core/currency";
import { setSelectedCurrency } from "~/redux/features/currency";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

const CurrencyMenu = () => {
  const availableCurrencies = useAppSelector(state => state.currency.list);
  const selectedCurrency = useAppSelector(state => state.currency.selected);
  const dispatch = useAppDispatch();

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="outline-success" id="currency-dropdown" className="d-flex align-items-center">
        <FontAwesomeIcon icon={(currencyIcon(selectedCurrency))} size="lg" className="fa-fw me-1" />
        <div className="lh-1 me-2">{selectedCurrency}</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {availableCurrencies.filter(c => c !== selectedCurrency).map(currency =>
          <Dropdown.Item key={currency} onClick={() => dispatch(setSelectedCurrency(currency))}>
            <FontAwesomeIcon icon={currencyIcon(currency)} className="fa-fw me-1" />
            {currency}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencyMenu;
