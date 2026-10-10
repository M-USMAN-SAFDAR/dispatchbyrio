# Dispatch by RIO

Truck dispatch and carrier business support website built with React 19, Vite,
Tailwind CSS, GSAP, Framer Motion, and Three.js.

## Development

```sh
npm install
npm run dev
```

Root installation also installs the frontend dependencies. Vite serves the
website at http://localhost:3000. There is no backend or MongoDB requirement;
the carrier application submits directly to FormSubmit.

## Checks and production

```sh
npm --prefix client run lint
npm run build
npm run preview
```

The build produces client/dist. The root vercel.json configures Vercel's build
and SPA routing. Install dependencies before building; the build command does
not install them a second time.

## Project structure

- client/src/pages: home, services, about, contact, FAQ, and legal routes.
- client/src/components: shared navigation, footer, and page components.
- client/src/components/home: active homepage animations and shared FAQ/CTA.
- client/src/components/experience: original procedural Three.js truck scene.
- client/public: deployed images, hero fallback poster, sitemap, and robots.
- design/hero: original image sources and the offline asset-generation script.

Routes and the 3D scene load on demand. ScrollTrigger drives the hero camera,
truck movement, SVG route map, equipment truck, and homepage reveals. Reduced
motion preferences are respected, and the 3D renderer stops while offscreen
or when the browser tab is hidden.
