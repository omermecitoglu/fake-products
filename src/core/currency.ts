import "server-only";

const apiBaseURL = "http://api.exchangeratesapi.io/v1/latest";

async function fetchJSON<T = unknown>(url: RequestInfo | URL, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

function fetchAPI<T>(endPoint: string, searchParams: Record<string, string>) {
  const url = new URL(endPoint, apiBaseURL);
  const accessKey = process.env.CURRENCY_API_ACCESS_KEY;
  if (!accessKey) throw new Error("CURRENCY_API_ACCESS_KEY is not defined!");
  url.searchParams.set("access_key", accessKey);
  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, value);
  }
  return fetchJSON<T>(url);
}

type CurrencyData = {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: Record<string, number>,
  error?: {
    code: number,
    type: string,
  },
};

function getCurrencyRates(targets: string[]): Promise<CurrencyData> {
  return fetchAPI("/latest", {
    symbols: targets.join(","),
  });
}

function getCurrencyRate(base: string, target: string): Promise<CurrencyData> {
  return getCurrencyRates([base, target]);
}

export async function convertCurrency(amount: number, base: string, target: string): Promise<number> {
  if (base === target) return amount;
  const data = await getCurrencyRate(base, target);
  if (!data.success) throw data.error;
  if (target === "EUR") {
    return amount * (1 / data.rates[base]);
  }
  if (base !== "EUR") {
    const baseToEurosRate = 1 / data.rates[base];
    const amountAsEuros = amount * baseToEurosRate;
    return amountAsEuros * data.rates[target];
  }
  return data.rates[target];
}
