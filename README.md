# com-rclg — Légion royale canadienne, filiale 59, Gaspé

Static, dependency-free version of the branch website, migrated from the WordPress multisite (`legiongaspe.ceegim.com`) on 2026-11-20.

Live: https://legiongaspe.ca/ (also https://adamnormand.github.io/com-rclg/)

## Files

| Path | Purpose |
|---|---|
| `index.html` | English home page (single page: About, Membership, Programs, Services, Executive, Governance, Contact) |
| `francais/index.html` | French home page, same structure |
| `assets/site.css` | Shared styles (brand red `#E51936`, cream `#FBF7F4`, Encode Sans) |
| `assets/site.js` | Mobile menu, About slider, active menu link. No libraries |
| `assets/*.jpg, *.png, *.svg` | Photos, logos, poppy graphic, check icon |
| `assets/rclg-reglements-bylaws.pdf` | Branch by-laws (linked from Governance → Gaspé) |
| `favicon.svg` | Site icon |
| `.nojekyll` | Serve files as-is |

External services used by the pages: Google Fonts (Encode Sans), YouTube (hero background video, privacy-enhanced mode), Google Maps (contact map). Governance links point to portal.legion.ca.

Removed in the migration, by decision: News and Calendar sections (WordPress posts and The Events Calendar plugin).

## Editing

Text lives directly in the two HTML files. Edit, commit to `main`, and GitHub Pages republishes within a minute or two.

## Publishing

Settings → Pages → Deploy from a branch → `main` / root.

## Moving to a custom domain later (e.g. legiongaspe.ca)

1. Add a `CNAME` file containing the bare domain, and set the same domain in Settings → Pages.
2. At the DNS host, point the domain at GitHub Pages:
   ```
   @    A     185.199.108.153
   @    A     185.199.109.153
   @    A     185.199.110.153
   @    A     185.199.111.153
   @    AAAA  2606:50c0:8000::153 / 2606:50c0:8001::153 / 2606:50c0:8002::153 / 2606:50c0:8003::153
   www  CNAME adamnormand.github.io
   ```
   Remove any old A/AAAA/CNAME on `@` and `www`. Do not touch MX, SPF/TXT or DKIM records.
3. Tick "Enforce HTTPS" once the certificate is issued.
