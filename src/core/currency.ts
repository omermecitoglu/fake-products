import "client-only";

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
