# KalaVerse — Discover the Art of India

KalaVerse is a modern, immersive full-stack website celebrating Indian traditional art forms, creative practice, and cultural storytelling. It includes curated art collections, a guided AI assistant, a mandala studio, creative challenges, progress tracking, and a contact form.

## Tech stack

- Frontend: React + Vite
- Backend: Node.js + Express
- AI: Google Gemini via the official `@google/genai` SDK
- Styling: Custom CSS with warm Indian art-inspired palettes

## Local development

1. Install dependencies:
   npm install
2. Add your Gemini key in `server/.env`:
   GEMINI_API_KEY=your_api_key_here
   NODE_ENV=development
   GEMINI_MODEL=gemini-2.5-flash
3. Start the app:
   npm run dev

The app runs the Vite frontend and the Express backend together in development mode.

## Production build

- Build the frontend: `npm run build`
- Start the server: `npm run start`

The Express server serves the built files from `dist/` and exposes the API on the same service.

## Render deployment

This project is ready to deploy as a single Render Web Service.

Required environment variables in Render:

- `PORT`: `10000`
- `NODE_ENV`: `production`
- `GEMINI_API_KEY`: your Gemini API key
- `GEMINI_MODEL`: `gemini-2.5-flash`

The project uses relative API URLs and includes a `/health` route. The server binds to `0.0.0.0` and serves front-end routes safely.

## API notes

- `POST /api/ai/chat` for Gemini-powered answers
- `POST /api/contact` for contact form submissions
- `GET /health` for health checks

If the Gemini API key is missing, the AI route responds with a clear server error instead of fabricating a successful result.
