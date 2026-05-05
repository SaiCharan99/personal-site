# Personal Portfolio Site

A single-page React portfolio website for **Venkata Sai Charan Naidu**, built with Vite and Framer Motion.

## Tech Stack

- React 18
- Vite 5
- React Router DOM
- Framer Motion
- Lucide React

## Project Structure

- `src/App.jsx` – app shell, loader flow, section layout, and scrollspy behavior.
- `src/pages/` – page sections (`Home`, `About`, `Work`, `Photography`, `Contact`).
- `src/components/` – reusable UI building blocks (navbar, footer, loader, cursor, section breaks, effects).
- `src/hooks/` – custom hooks (scroll progress logic).
- `public/` and `src/assets/` – static and imported media assets.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build locally

```bash
npm run preview
```

## Notes

- The app is organized as a smooth-scrolling, section-based experience.
- Initial load includes a 2-second animated loader before rendering the main content.
- Main sections are: Home, About, Work, Photography, and Contact.
