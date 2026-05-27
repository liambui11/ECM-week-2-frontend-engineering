# E-CraftMan Shop — Production Practice Project

A clean, scalable e-commerce prototype built with React, TypeScript, and Zustand.

## 🚀 Setup Instructions

1. **Environment Setup:** Create a `.env` file in the root directory and add the following:
   ```env
   VITE_API_BASE_URL=https://fakestoreapi.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Folder Structure

- `src/constants`: API endpoints and storage keys.
- `src/types`: TypeScript interfaces for core data models.
- `src/services`: API data fetching logic.
- `src/store`: Global state management with Zustand (Auth, Cart).
- `src/components`: UI components split into `common`, `layout`, and feature-based folders.
- `src/pages`: Top-level page components for routing.
- `src/styles`: Modular CSS files.

## 🛠 Design Decisions

1. **State Management:** Used **Zustand** for its simplicity and built-in persistence (localStorage). This ensures the cart and login session survive page refreshes.
2. **Service Layer:** Separated API logic from components to keep components focused on UI and easily testable.
3. **UI Robustness:** Implemented `ErrorBoundary`, `Loading`, `Error`, and `Empty` views to handle all possible application states gracefully.
4. **Clean Code:** Strictly followed the "no file > 150 lines" and "no function > 20 lines" rules to maintain readability.
5. **No `any`:** Enforced strict TypeScript typing across the entire codebase.
