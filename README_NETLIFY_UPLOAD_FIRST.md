# ECR Translogix - Clean Netlify/GitHub Upload

This package is prepared for Netlify with Node 20 pinned.

## Upload to GitHub
1. Create a new empty GitHub repository.
2. Upload everything inside this folder to the repository root.
3. Do not upload `node_modules`.

## Netlify settings
- Base directory: leave blank
- Build command: `npm ci && npm run build`
- Publish directory: `dist`

Node is already pinned in `.nvmrc` and `netlify.toml` to `20.19.0`.

## Alternative quick publish
You can also drag-and-drop the included `dist` folder into Netlify manual deploy after running the build.
