import { apiClient } from './api';
import type { ProductResponse } from './product.types';

export const ProductService = {
  getAllProducts: async (signal?: AbortSignal): Promise<ProductResponse> => {
    const response = await apiClient.get<ProductResponse>('/products', { signal });
    return response.data; 
  }
};