import { ProductsResponse, Product } from "../types/types";

const BASE_URL = "https://dummyjson.com/products";

export const getAllProducts = async (
  limit: number
): Promise<ProductsResponse> => {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};

export const getProductById = async (id: number | string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return await response.json();
};
