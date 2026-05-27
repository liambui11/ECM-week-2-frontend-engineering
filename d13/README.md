# Marketplace State Management Sandbox

This project is a React and TypeScript application built with Vite, designed to demonstrate robust state management principles using Zustand. It implements a fully functioning marketplace catalog and a dynamic shopping basket with persisted state and real-time DevTools trace tracking.

## Technical Setup

### Prerequisites
- Node.js (version 18.x or above recommended)
- npm or yarn

### Steps to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the local development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`.
4. Run ESLint verification:
   ```bash
   npm run lint
   ```

---

## Folder Structure

```
d13/
├── .prettierrc                  # Prettier code formatting standards
├── eslint.config.js             # ESLint flat configuration for code health
├── package.json                 # Project dependencies & build automation scripts
├── src/
│   ├── App.tsx                  # Application entry point with ErrorBoundary layouts
│   ├── App.css                  # Core app container styles
│   ├── main.tsx                 # DOM mounting node
│   ├── index.css                # Global design system variables & dark-glass styling tokens
│   ├── constants/
│   │   └── storage.constants.ts # Strictly defined local storage and API endpoint keys
│   ├── types/
│   │   └── store.types.ts       # Domain TypeScript type safety interfaces
│   ├── store/
│   │   └── useGlobalStore.ts    # Single source of truth Zustand store with persistent & devtools middlewares
│   ├── components/
│   │   └── ErrorBoundary.tsx    # Declarative layout recovery system
│   └── views/
│       ├── HeaderLayout.tsx     # Navigation, auth details, and toggle actions
│       ├── ProductCatalog.tsx   # Catalog visual block with loader, error, and empty states
│       └── CartDetails.tsx      # Sidebar cart details panel
```

---

## Key Design Decisions

### 1. Unified State Store with Zustand
Zustand was chosen over heavier alternatives like Redux Toolkit to provide lightweight yet highly robust state management. A single store `useGlobalStore` maintains:
- `cart`: Saved items persisting across window refreshes.
- `user`: Simulated authentication state.
- `isSidebarOpen`: Component layout visibility toggles.

All actions are centralized inside the store itself, separating business logic completely from templates and views.

### 2. State Persistence & DevTools Action Tracking
- **Persistence Middleware**: Automated hydration hooks into `localStorage` safely preserve client shopping states using predefined immutable storage keys.
- **DevTools Integration**: Every dispatched state transition is logged explicitly using descriptive actions (such as `cart/addItem`, `ui/toggleSidebar`) for ease of debugging in the Redux DevTools extension.

### 3. Bulletproof UI Stability
- **Isolated Error Boundaries**: Wrapping major user interfaces (Header, Catalog, Sidebar) guarantees that a rendering crash inside the catalog or cart will not crash the entire browser window.
- **Comprehensive View States**: The catalog incorporates independent styles and layouts to render a custom spinner when downloading products, display precise error notifications if endpoints fail, and show placeholder text when no items are available.
