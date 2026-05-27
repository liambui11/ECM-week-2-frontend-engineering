export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface UserProfile {
  uid: string;
  email: string;
}

export interface StoreState {
  cart: CartItem[];
  user: UserProfile | null;
  isSidebarOpen: boolean;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  loginUser: (email: string) => void;
  logoutUser: () => void;
  toggleSidebar: () => void;
}