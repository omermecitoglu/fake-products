import { NextResponse } from "next/server";
import { fetchLatest } from "~/core/currencyApi";

export const revalidate = 3600;

export async function GET(_request: Request) {
  const latestCurrencyData = await fetchLatest();
  return NextResponse.json(latestCurrencyData);
}
