# Vue.js Job Board Application

A modern job board application built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- Browse job listings with a clean, modern interface
- Filter jobs by title, location, and category
- View detailed job information
- Responsive design that works on all devices
- Type-safe development with TypeScript
- State management with Pinia
- Client-side routing with Vue Router

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Vue Router for navigation
- Pinia for state management
- Tailwind CSS for styling
- Vite as the build tool

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── views/         # Page components
├── stores/        # Pinia stores
├── router/        # Vue Router configuration
├── types/         # TypeScript type definitions
└── data/          # Mock data
```

## Development Choices

1. **Vue 3 with Composition API**: Chosen for its improved TypeScript support and better code organization.
2. **TypeScript**: Added for better type safety and developer experience.
3. **Pinia**: Selected over Vuex for its simpler API and better TypeScript support.
4. **Tailwind CSS**: Used for rapid UI development and consistent styling.
5. **Vite**: Chosen as the build tool for its fast development experience.

## Future Improvements

- Add unit tests with Vitest
- Implement job application functionality
- Add user authentication
- Create an admin panel for job management
- Add search history and saved jobs features
