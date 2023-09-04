const apiBaseURL = "https://fakestoreapi.com";

async function fetchJSON<T = unknown>(url: RequestInfo | URL, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

function fetchAPI<T>(endPoint: string) {
  return fetchJSON<T>(new URL(endPoint, apiBaseURL));
}

export type Product = {
  id: number,
  title: string,
  originalPrice: number,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
};

export function getProducts(): Promise<Product[]> {
  return fetchAPI("/products");
}

export function getProduct(productId: number): Promise<Product> {
  return fetchAPI("/products/" + productId);
}
