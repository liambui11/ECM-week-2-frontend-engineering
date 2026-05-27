import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, User } from '../types/auth';
import { STORAGE_KEYS } from '../constants/api';

// Auth store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: STORAGE_KEYS.AUTH_STORAGE,
    }
  )
);
