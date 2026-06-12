# Frank Lam Portfolio (React + Vite)

This is the React migration of the previous Gatsby portfolio. Content, projects, skills, contact details, and media assets were moved from `portfolio-gatsby` into this app.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Netlify deployment

`netlify.toml` is included for SPA routing and build settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect: `/* -> /index.html` (status 200)
