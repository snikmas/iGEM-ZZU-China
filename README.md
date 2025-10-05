# Team ZZU-China 2025 Wiki

This repository MUST contain all coding assets to generate your team's wiki (HTML, CSS, JavaScript, TypeScript, Python, etc).
Images, photos, icons and fonts MUST be stored on static.igem.wiki using tools.igem.org, and Videos must be embedded from iGEM Video Universe.
For up-to-date requirements, resources, help and guidance, visit competition.igem.org/deliverables/team-wiki.

## Getting Started

This repository contains the source code for the Team ZZU-China 2025 Wiki. The general structure follows a React-based setup, allowing easy modification and extension to suit your wiki's needs.

## Technologies

- **React 19** – Core library for building user interfaces
- **React Router v7** – Declarative routing management
- **Ant Design 5** – UI component library
- **ECharts 5** – Data visualization and charting library
- **Axios** – HTTP client
- **React PDF** – Component for displaying PDF files


## Directory Structure

\`\`\`
src/
├── components/     # Reusable common components
├── pages/          # Page-level components
├── utils/          # Utility functions and helper methods
├── views/          # View components
├── App.js          # Root component of the application
├── index.js        # Application entry point
└── ...
\`\`\`

## Quick Start

### Environment Requirements

- Node.js >= 14.x
- npm or yarn

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

or

\`\`\`bash
yarn install
\`\`\`

### Start the Development Server

\`\`\`bash
npm start
\`\`\`

或

\`\`\`bash
yarn start
\`\`\`

After the server starts, the application will automatically open in your browser at http://localhost:3000.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

or

\`\`\`bash
yarn build
\`\`\`

The built files will be output to the build directory and can be used for deployment.

## Development Guidelines

### Component Development

1. Reusable common components are placed in the src/components/ directory.
2. Page-level components are placed in the src/pages/ directory.
3. Feature-specific views are placed in the src/views/ directory.

### Styling Guidelines

- Each component should have a corresponding CSS file with the same name (e.g., Button.jsx → Button.css).
- Use CSS Modules to avoid style conflicts.
- Follow the BEM naming convention for consistency.

### Available Scripts

In the project directory, you can run:

### \`npm start\`

Starts the development server with hot reloading enabled.

### \`npm test\`

Launches the test runner in interactive watch mode.

### \`npm run build\`

Builds the app for production and outputs the files to the build folder.


### \`npm run eject\`

Note: This is a one-way operation — once you eject, you can’t go back.
This command will copy all configuration files and dependencies into your project, giving you full control over them.

## Browser Support

All modern browsers are supported by default.
You can check the specific list in the browserslist field of the package.json file.

## Deployment

The built application is a static website and can be deployed to any static file server, such as:

- Netlify
- Vercel
- GitHub Pages
- Traditional servers like Nginx or Apache

## Learning Resources

- React Official Documentation
- React Router Documentation
- Ant Design Component Library
- ECharts Visualization Library
