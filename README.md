# LCMS Web - Learning Center Management System

A modern frontend for managing learning centers, built with React 19 + TypeScript + Vite.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tool with path alias `@/` → `src/`
- **TanStack Router** — file-based routing with role-based access control
- **TanStack Query** — server state management
- **MUI v7** — UI component library
- **Zustand** — client state (auth, UI)
- **Axios** — HTTP client with JWT interceptors & token refresh
- **React Hook Form** + **Zod** — form validation
- **Prettier** + **ESLint** — code quality

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

## Demo Accounts

| Role    | Email               | Password |
|---------|---------------------|----------|
| Admin   | admin@lcms.vn       | password |
| Branch  | branch@lcms.vn      | password |
| Teacher | teacher@lcms.vn     | password |
| Student | student@lcms.vn     | password |
| Parent  | parent@lcms.vn      | password |
| Staff   | staff@lcms.vn       | password |

## Project Structure

```
src/
├── app/            # App entry & providers
│   └── providers/  # ThemeProvider, QueryProvider
├── components/
│   └── ui/         # Reusable UI components
├── constants/      # Roles, route paths
├── features/       # Feature modules (auth, students, classes, ...)
├── hooks/          # Custom hooks (useAuth, usePermission, useDebounce)
├── layouts/        # AdminLayout, AuthLayout, DashboardLayout
├── routes/         # File-based routes (TanStack Router)
│   ├── __root.tsx
│   ├── index.tsx
│   ├── _auth.tsx           # Pathless layout for auth pages
│   ├── _auth/login.tsx     # /login
│   ├── _protected.tsx      # Pathless layout — requires auth
│   └── _protected/         # Role-based sub-routes
├── services/       # apiClient, queryClient, queryKeys
├── store/          # Zustand stores (auth, ui)
├── theme/          # MUI theme config
├── types/          # TypeScript interfaces
└── utils/          # Formatting, permissions
```

## Scripts

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start dev server               |
| `npm run build`  | Type-check + production build  |
| `npm run lint`   | Run ESLint                     |
| `npm run format` | Format with Prettier           |
| `npm run preview`| Preview production build       |
