import "server-only";

const apiBaseURL = "http://api.exchangeratesapi.io/v1/latest";

/**
 * Fetch JSON data from a given URL.
 *
 * @param {RequestInfo | URL} url - The URL to fetch JSON data from.
 * @param {RequestInit} [options] - Optional request options.
 * @returns {Promise<T>} A promise that resolves to the JSON data.
 * @template T - The type of the JSON data (default is 'unknown').
 */

async function fetchJSON<T = unknown>(url: RequestInfo | URL, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

/**
 * Fetch data from an API endpoint with optional search parameters.
 *
 * @param {string} endPoint - The API endpoint to fetch data from.
 * @param {Record<string, string>} searchParams - Optional search parameters as key-value pairs.
 * @throws {Error} Throws an error if CURRENCY_API_ACCESS_KEY is not defined.
 * @returns {Promise<T>} A promise that resolves to the fetched data.
 * @template T - The type of the fetched data.
 */

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

/**
 * Represents data for currency exchange rates.
 *
 * @typedef {Object} CurrencyData
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {number} timestamp - The timestamp of the data.
 * @property {string} base - The base currency code.
 * @property {string} date - The date associated with the data.
 * @property {Record<string, number>} rates - An object containing exchange rates.
 * @property {Object} [error] - Optional error information.
 * @property {number} error.code - The error code (if an error occurred).
 * @property {string} error.type - The error type (if an error occurred).
 */

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

/**
 * Fetch the latest currency exchange rates.
 *
 * @returns {Promise<CurrencyData>} A promise that resolves to the latest currency exchange rates data.
 */

export function fetchLatest(): Promise<CurrencyData> {
  return fetchAPI<CurrencyData>("/latest", {
    symbols: "USD,EUR,GBP,JPY",
  });
}
