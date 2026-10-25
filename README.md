# thehotfarmer.com

Static landing site: age gate → link page out to OnlyFans, X and Reddit. Nothing explicit is hosted here by design.

## Layout
- `public/` — the site. Plain HTML/CSS/JS, no build step.
- `public/_headers` — Cloudflare security and cache headers. (www→apex: add a Redirect Rule in the Cloudflare dashboard; Workers `_redirects` only allows relative targets.)
- `wrangler.jsonc` — Cloudflare Workers (static assets) config with custom domains.

## Deploy
Manual: `npx wrangler deploy` (requires `npx wrangler login` once).

Auto: Cloudflare dashboard → Workers & Pages → Create → Import a repository → this repo, production branch `main`. Build command: none. Deploy command: `npx wrangler deploy`.

## Before launch
- Replace `[LEGAL NAME / ENTITY]` and address in `public/compliance.html`.
- Set the OnlyFans subscription price in `public/index.html` if you want it shown.
- Register a DMCA agent at dmca.copyright.gov.
- Have the Terms reviewed.
