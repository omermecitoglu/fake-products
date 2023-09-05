import "client-only";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons/faEuroSign";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons/faSterlingSign";
import { faYenSign } from "@fortawesome/free-solid-svg-icons/faYenSign";

/**
 * Converts a price from one currency to another based on exchange rates.
 *
 * @param {number} value - The price value to convert.
 * @param {string} base - The base currency code.
 * @param {string} target - The target currency code.
 * @param {Record<string, number>} rates - An object containing exchange rates.
 * @returns {number} The converted price.
 */

export function convertCurrency(value: number, base: string, target: string, rates: Record<string, number>): number {
  if (base === target) return value;
  if (target === "EUR") {
    return value * (1 / rates[base]);
  }
  if (base !== "EUR") {
    const baseToEurosRate = 1 / rates[base];
    const valueAsEuros = value * baseToEurosRate;
    return valueAsEuros * rates[target];
  }
  return rates[target];
}

/**
 * Get the Font Awesome icon for a given currency symbol.
 *
 * @param {string} currencySymbol - The currency symbol code (e.g., "USD", "EUR", "GBP", "JPY").
 * @returns {FontAwesomeIcon} The Font Awesome icon for the currency symbol.
 */

export function currencyIcon(currencySymbol: string) {
  switch (currencySymbol) {
    case "USD": return faDollarSign;
    case "EUR": return faEuroSign;
    case "GBP": return faSterlingSign;
    case "JPY": return faYenSign;
    default: return faQuestion;
  }
}
