const apiBaseURL = "https://fakestoreapi.com";

/**
 * Fetch JSON data from a URL and parse it into the specified type.
 *
 * @template T - The type of data to parse the JSON into.
 * @param {RequestInfo | URL} url - The URL to fetch JSON data from.
 * @param {RequestInit} [options] - Optional fetch options.
 * @returns {Promise<T>} A promise that resolves to the parsed JSON data of the specified type.
 */

async function fetchJSON<T = unknown>(url: RequestInfo | URL, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

/**
 * Fetch data from an API endpoint and parse it into the specified type.
 *
 * @template T - The type of data to parse the JSON into.
 * @param {string} endPoint - The API endpoint to fetch data from.
 * @returns {Promise<T>} A promise that resolves to the parsed data of the specified type.
 */

function fetchAPI<T>(endPoint: string) {
  return fetchJSON<T>(new URL(endPoint, apiBaseURL));
}

/**
 * Represents a product.
 *
 * @property {number} id - The unique identifier of the product.
 * @property {string} title - The title or name of the product.
 * @property {number} originalPrice - The original price of the product before any discount.
 * @property {number} price - The current price of the product.
 * @property {string} description - A brief description of the product.
 * @property {string} category - The category to which the product belongs.
 * @property {string} image - The URL or path to the product's image.
 * @property {object} rating - An object representing the product's rating.
 * @property {number} rating.rate - The average rating given to the product.
 * @property {number} rating.count - The total number of reviews or ratings for the product.
 */

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

/**
 * Fetches a list of products from the API.
 *
 * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects.
 */

export function getProducts(): Promise<Product[]> {
  return fetchAPI("/products");
}

/**
 * Fetches a product by its unique identifier from the API.
 *
 * @param {number} productId - The unique identifier of the product to fetch.
 * @returns {Promise<Product>} A promise that resolves to a Product object.
 */

export function getProduct(productId: number): Promise<Product> {
  return fetchAPI("/products/" + productId);
}
