import type { Product } from '../types/product';
import { PRODUCTS_URL } from '../constants/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCTS_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${PRODUCTS_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return response.json();
};
