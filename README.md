# DispatchByRIO — Truck Dispatch Services

Professional truck dispatch services website for owner-operators and fleet owners across the United States.

## Architecture

- **Frontend**: React 19 (Vite) + Tailwind CSS 4 + Framer Motion
- **Backend**: Node.js + Express.js + Mongoose (MongoDB)
- **API**: Contact form submissions stored in MongoDB

---

## Local Development

1. Install dependencies:
   ```bash
   npm run install-all
   ```
2. Create a `.env` file in `server/` (copy from `.env.example`):
   ```bash
   cp server/.env.example server/.env
   ```
3. Start MongoDB locally (or use MongoDB Atlas URI in `.env`).
4. Run both client and server:
   ```bash
   npm run dev
   ```
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

## Deployment Guide

### 1. Backend (Render)

1. Sign up at [Render](https://render.com/)
2. Create a **Web Service**, connect your Git repo
3. Configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Add **Environment Variables**:
   - `MONGO_URI` — Your MongoDB Atlas connection string
   - `PORT` — `10000`
   - `ALLOWED_ORIGINS` — Your frontend URL (e.g. `https://dispatchbyrio.com`)
   - `ADMIN_API_KEY` — A strong random key for admin access

### 2. Frontend (Vercel)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your Git repo
3. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add **Environment Variable**:
   - `VITE_API_URL` — Your Render backend URL (e.g. `https://dispatchbyrio-backend.onrender.com`)
5. Connect your custom domain in Vercel settings

---

## Project Structure

```
├── client/                 # React frontend
│   ├── public/             # Static assets (images, robots.txt, sitemap.xml)
│   ├── src/
│   │   ├── assets/         # Logo
│   │   ├── components/     # Reusable components (Navbar, Footer, home sections)
│   │   ├── pages/          # Route pages (Home, About, Pricing, Contact, etc.)
│   │   ├── App.jsx         # Router + lazy-loaded routes
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles + Tailwind theme
│   ├── vite.config.js
│   └── vercel.json         # SPA rewrites for Vercel
├── server/                 # Express backend
│   ├── config/db.js        # MongoDB connection
│   ├── models/Contact.js   # Contact form schema
│   ├── routes/contact.js   # Contact API (POST + admin GET)
│   └── server.js           # Express app entry
└── package.json            # Root monorepo scripts
```
