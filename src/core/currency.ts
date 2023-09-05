import "client-only";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons/faEuroSign";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons/faSterlingSign";
import { faYenSign } from "@fortawesome/free-solid-svg-icons/faYenSign";

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

export function currencyIcon(currencySymbol: string) {
  switch (currencySymbol) {
    case "USD": return faDollarSign;
    case "EUR": return faEuroSign;
    case "GBP": return faSterlingSign;
    case "JPY": return faYenSign;
    default: return faQuestion;
  }
}
