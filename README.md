# Foxbane Consulting

Brochure site for **Foxbane Consulting**, an independent assurance and advisory firm. The site is plain **HTML, CSS, and JavaScript** with no bundler or framework: easy to host, edit, and cache.

[View the live site](https://chandler-heath.github.io/foxbane/)

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home, firm overview, client feedback |
| `our-services.html` | Service areas, with in-page jump navigation |
| `our-approach.html` | Approach and audiences, with in-page jump navigation |
| `contact.html` | Contact and how to get in touch |

## Project layout

- `style.css` — global styles and components  
- `site.js` — shared scripts (year, jump-nav spy; optional theme code commented)  
- `assets/` — `FoxbaneLogo.png`, `seo-cover.png`, `favicon.ico`  
- `start-server.sh` — local preview server with no-cache headers  
- `.github/workflows/static.yml` — deploy the repo root to **GitHub Pages** on push to `main`

## Local preview

From the repository root:

```bash
./start-server.sh
```

Then open **http://localhost:3000** (Python 3 required). Use **Ctrl+C** to stop the server.

## Deployment

The site is built as a pure static web page (HTML/CSS/JS) with no build steps required. It is designed to be highly portable and can be hosted on any static hosting provider.

### GitHub Pages

Deploys to [GitHub Pages](https://chandler-heath.github.io/foxbane/) using GitHub Actions. The workflow is defined in the `.github/workflows/static.yml` file.
