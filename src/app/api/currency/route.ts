import { NextResponse } from "next/server";
import { fetchLatest } from "~/core/currencyApi";

/**
 * The time interval in seconds for revalidating cached data.
 */

export const revalidate = 3600;

/**
 * Handle a GET request and return the latest currency exchange rates.
 *
 * @param {Request} _request - The HTTP request object (ignored in this function).
 * @returns {Response} A response containing the latest currency exchange rates data.
 */

export async function GET(_request: Request) {
  const latestCurrencyData = await fetchLatest();
  return NextResponse.json(latestCurrencyData);
}
