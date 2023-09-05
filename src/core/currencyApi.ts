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

export type CurrencyData = {
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

export function fetchLatest(): Promise<CurrencyData> {
  return fetchAPI<CurrencyData>("/latest", {
    symbols: "USD,EUR,GBP,JPY",
  });
}
