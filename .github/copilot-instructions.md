## NewsExplorer Frontend - AI assistant instructions

This file gives focused, actionable guidance to AI coding agents working on the
NewsExplorer React frontend. Keep suggestions and code changes concrete and
repo-specific (refer to files below). Avoid speculative or aspirational
recommendations.

Key facts
- Project type: Vite + React (see `package.json`, `vite.config.js`).
- Entry: `src/main.jsx` mounts `App` inside `BrowserRouter`.
- Main app: `src/components/App/App.jsx` — routes for `/` and `/saved-news`.
- API helper: `src/utils/api.js` reads env vars `VITE_NEWS_API_KEY` and
  `VITE_NEWS_API_URL` and exposes `searchNews(query)`.
- Sample content: `src/utils/constants.js` contains `articles` used as mocked
  search results in `App.jsx`.

What to change and how
- Keep changes minimal and local: prefer editing or adding components under
  `src/components/` and helpers under `src/utils/`.
- When introducing runtime configuration, use Vite env vars (`import.meta.env`) —
  see `src/utils/api.js`.
- Use existing CSS modules under each component folder (e.g. `SearchForm.css`,
  `Modal.css`) for styling. Avoid changing global vendor styles unless necessary
  (`src/vendor/normalize.css`, `src/vendor/fonts.css`).

Patterns and examples
- Routing: `App.jsx` uses `react-router-dom` v6 `Routes`/`Route`. Add pages as
  route elements inside `Routes`.
- Search flow: `SearchForm` calls a parent handler `onSearchSubmit(keyword)`; in
  `App.jsx` searching sets `isLoading` and swaps `articles` with values from
  `src/utils/constants.js` (mock). If implementing the real API, call
  `searchNews(keyword)` from `src/utils/api.js`, set `isLoading` appropriately,
  and handle promise rejections from `handleResponse`.
- Modal pattern: `Modal.jsx` controls Escape key listener and overlay click to
  close. When adding modals, follow same props: `isOpen`, `onClose`, `children`.

Build, run and lint commands
- Start dev server: `npm run dev` (runs `vite`).
- Build production bundle: `npm run build`.
- Preview build: `npm run preview`.
- Linting and formatting: `npm run lint` (ESLint), `npm run format` (Prettier).

Tests and CI
- This repo currently has no tests or CI config. If adding tests, prefer Jest
  + React Testing Library and add scripts to `package.json`. Keep tests co-located
  with components (e.g. `src/components/.../Component.test.jsx`).

Integration points and environment
- External API: News API configured via Vite env vars:
  - `VITE_NEWS_API_KEY`
  - `VITE_NEWS_API_URL`
  During local development, place these in a `.env` or `.env.local` at the
  project root. Do NOT embed secrets in the repository.

Conventions and small decisions
- Files: components are colocated with their CSS in `src/components/*/`.
- CSS: plain CSS files (not CSS modules). Use existing class names when
  altering styles to avoid breaking markup.
- Mock data: prefer using `src/utils/constants.js` for UI prototyping rather
  than hardcoding lists in components.

Quick tasks examples
- Replace mock search with real API: call `searchNews` in `App.jsx`'s
  `handleSearchSubmit`, handle loading and errors, and map API response to the
  `articles` shape used by `NewsCard`.
- Add route/page: create `src/components/MyPage/MyPage.jsx` + `MyPage.css` and
  add a `<Route path="/my-page" element={<MyPage/>} />` in `App.jsx`.

Reference files
- `package.json`, `vite.config.js` — build/dev scripts & plugins
- `src/main.jsx` — app bootstrap
- `src/components/App/App.jsx` — routing and top-level state
- `src/components/SearchForm/SearchForm.jsx` — search input pattern
- `src/components/Modal/Modal.jsx` — modal behavior
- `src/utils/api.js` — API integration
- `src/utils/constants.js` — mock articles

If anything important is missing (CI, env examples, design tokens), ask the
maintainer before making large structural changes.

Request for feedback
If this file misses conventions you'd like enforced (naming, state, tests,
commits), tell me which rules to add and I'll iterate.
