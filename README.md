# Fake Products

![Project Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

This is the README file for the "fake-products" project. This project is a web application built using Next.js and React for displaying fake products. It includes features like product listing, currency switching, and more. Below, you'll find information about the project's structure, scripts, and dependencies.

## Table of Contents

- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)

## Scripts

The project includes several npm scripts for development and build tasks:

- `npm run prebuild`: Runs `ts-unused-exports` to check for unused exports in TypeScript files, excluding paths in 'app' and 'pages'.
- `npm run lint`: Lint your code using Next.js's built-in linting.
- `npm run lint:fix`: Automatically fix linting issues.
- `npm run dev`: Start the development server using Next.js.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.

## Dependencies

The project relies on the following dependencies:

- `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-solid-svg-icons`, and `@fortawesome/react-fontawesome` for FontAwesome icons.
- `@reduxjs/toolkit` for managing state.
- `bootstrap` for styling.
- `classnames` for conditional CSS classes.
- `next` for server-side rendering and routing.
- `react` and `react-dom` for building user interfaces.
- `react-bootstrap` for Bootstrap components.
- `react-redux` for integrating Redux with React.
- `redux-persist` for persisting Redux state.
- `sass` for stylesheets.

### Development Dependencies

- `@next/eslint-plugin-next` for Next.js ESLint rules.
- `@types/node` and `@types/react` for TypeScript type definitions.
- `@typescript-eslint/eslint-plugin` for TypeScript ESLint rules.
- `eslint` and `eslint-plugin-import` for linting.
- `eslint-plugin-unused-imports` for detecting unused imports.
- `ts-unused-exports` for checking unused exports in TypeScript files.
- `typescript` for TypeScript support.

## Development

To start development, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

Feel free to modify and extend the project as needed. Happy coding!
