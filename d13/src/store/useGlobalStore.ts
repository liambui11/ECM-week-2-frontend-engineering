import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '../constants/storage.constants';
import type { CartItem, StoreState } from '../types/store.types';

const handleAddToCart = (cart: CartItem[], product: Omit<CartItem, 'quantity'>): CartItem[] => {
  const existingIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingIndex > -1) {
    const updatedCart = [...cart];
    updatedCart[existingIndex] = {
      ...updatedCart[existingIndex],
      quantity: updatedCart[existingIndex].quantity + 1
    };
    return updatedCart;
  }
  
  return [...cart, { ...product, quantity: 1 }];
};

export const useGlobalStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        user: null,
        isSidebarOpen: false,

        addToCart: (product) => set(
          (state) => ({ cart: handleAddToCart(state.cart, product) }),
          false,
          'cart/addItem'
        ),

        removeFromCart: (id) => set(
          (state) => ({ cart: state.cart.filter(item => item.id !== id) }),
          false,
          'cart/removeItem'
        ),

        clearCart: () => set({ cart: [] }, false, 'cart/clear'),

        loginUser: (email) => set(
          { user: { uid: 'USR-2026', email } },
          false,
          'auth/login'
        ),

        logoutUser: () => set({ user: null, cart: [] }, false, 'auth/logout'),
        
        toggleSidebar: () => set(
          (state) => ({ isSidebarOpen: !state.isSidebarOpen }),
          false,
          'ui/toggleSidebar'
        ),
      }),
      { name: STORAGE_KEYS.GLOBAL_STORE }
    )
  )
);