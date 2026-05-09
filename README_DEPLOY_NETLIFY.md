# Fresh GitHub + Netlify Deploy Instructions

This package is prepared for a fresh GitHub repository and fresh Netlify deploy.

## What was fixed

- Node is locked to `20.20.2` using `.nvmrc` and `netlify.toml`.
- npm is locked to `10.8.2`.
- Netlify build command now runs a clean install first:
  `npm ci --include=dev && npm run build`
- Dev dependencies are forced to install, so Vite is available during build.
- Netlify publish folder is `dist`.
- SPA redirect is included so page refreshes do not break.

## Upload to GitHub

1. Create a new empty GitHub repository.
2. Upload all files from this ZIP into the root of the repository.
3. Do not upload `node_modules`.
4. Do not upload any old broken files from the previous repository.

## Netlify settings

Use these settings:

- Build command: `npm ci --include=dev && npm run build`
- Publish directory: `dist`
- Base directory: leave blank

## Important Netlify environment variables

Remove these if they exist:

- `NODE_ENV = production`
- `NPM_CONFIG_PRODUCTION = true`

This project does not need Supabase environment variables unless you later add Supabase code.

## If Netlify still fails

In Netlify, click:

Deploys → Trigger deploy → Clear cache and deploy site

