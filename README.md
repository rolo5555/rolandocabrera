# DevopsShowcase

## Running the Frontend as a Static Website

To run only the frontend as a static website:

1. Install dependencies:
   ```
   make install
   ```
   or
   ```
   npm install
   ```

2. Build the frontend:
   ```
   make build-frontend
   ```
   or
   ```
   npx vite build
   ```

3. Serve the static files locally:
   ```
   make serve-frontend
   ```
   or
   ```
   npx vite preview
   ```

## Deploying to Static Hosting

The built frontend files will be in the `dist/public` directory. You can deploy these files to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

For deployment, you can upload all the files from the `dist/public` directory to your static hosting service.

Note: Without the backend server, any API requests will fail. You'll need to modify the frontend code to:
1. Remove backend-dependent features or
2. Point API requests to a separately hosted backend server

## Full Project Setup

For running the complete application with backend:

- Development mode: `make dev`
- Production build: `make build`
- Start production server: `make start`

See the Makefile for more commands. 