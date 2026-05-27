export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://fakestoreapi.com';
export const PRODUCTS_URL = `${API_BASE_URL}/products`;

export const STORAGE_KEYS = {
  CART_STORAGE: 'ecraftman-cart-storage',
  AUTH_STORAGE: 'ecraftman-auth-storage',
};
