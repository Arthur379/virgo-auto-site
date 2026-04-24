# Virgo Auto — Website

Specialist panel beating, chassis alignment and structural car repair in Dundalk, Co. Louth.

Pure static HTML/CSS/JS website — no frameworks, no build step, no npm.

## Tech stack

- **HTML5** — 16 files (15 content pages + 404)
- **CSS** — single file (`assets/css/styles.css`) with CSS custom properties
- **JS** — single file (`assets/js/main.js`) — mobile menu, FAQ accordion, sticky nav, smooth scroll, dropdowns
- **Fonts** — Bebas Neue (display), Inter (body), JetBrains Mono (mono) via Google Fonts
- **SVGs** — blueprint-style placeholder images in `assets/img/`

## Pages

| # | File | Type | Indexable |
|---|------|------|-----------|
| 1 | `index.html` | Homepage | Yes |
| 2 | `panel-beating-dundalk.html` | Service | Yes |
| 3 | `chassis-alignment-dundalk.html` | Service | Yes |
| 4 | `structural-car-repair-dundalk.html` | Service | Yes |
| 5 | `car-frame-straightening.html` | Service | Yes |
| 6 | `trade-partners.html` | Service | Yes |
| 7 | `panel-beater-drogheda.html` | Town | Yes |
| 8 | `panel-beater-ardee.html` | Town | Yes |
| 9 | `panel-beater-newry.html` | Town | Yes |
| 10 | `panel-beater-monaghan.html` | Town | Yes |
| 11 | `panel-beater-navan.html` | Town | Yes |
| 12 | `panel-beater-carlingford.html` | Town | Yes |
| 13 | `crash-repair-cost-ireland.html` | FAQ article | Yes |
| 14 | `insurance-approved-repairer.html` | FAQ article | Yes |
| 15 | `split-repair-guide.html` | FAQ article | Yes |
| 16 | `404.html` | Error | No |

## Placeholders to replace before going live

Search and replace these placeholders across all HTML files:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{{PHONE_E164}}` | Phone in E.164 format | `+353861234567` |
| `{{PHONE_DISPLAY}}` | Phone for display | `086 123 4567` |
| `{{WHATSAPP_NUMBER}}` | WhatsApp number (no +) | `353861234567` |
| `{{EMAIL}}` | Business email | `info@virgoauto.ie` |
| `{{STREET_ADDRESS}}` | Street address | `Unit 5, Coe's Road Industrial Estate` |
| `{{EIRCODE}}` | Eircode | `A91 XYZ1` |
| `{{FACEBOOK_URL}}` | Facebook page URL | `https://facebook.com/virgoauto` |
| `{{GMB_URL}}` | Google Business Profile URL | `https://g.page/virgoauto` |

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: _(leave blank)_
3. Build output directory: `/`
4. Deploy

### Netlify

1. Connect your GitHub repository
2. Build command: _(leave blank)_
3. Publish directory: `/`

### Custom domain

Point `virgoauto.ie` to your hosting provider via DNS. Both Cloudflare Pages and Netlify provide free SSL.

## Local development

Open any HTML file directly in a browser, or use a local server:

```bash
npx serve .
```

## Branch workflow

1. Edit files locally
2. `git add . && git commit -m "describe change"`
3. `git push`
4. Auto-deploy triggers on push to `main`

## Post-launch checklist

- [ ] Replace all `{{PLACEHOLDER}}` values
- [ ] Set up Google Business Profile and get `{{GMB_URL}}`
- [ ] Create Facebook page and get `{{FACEBOOK_URL}}`
- [ ] Submit sitemap to Google Search Console (`https://virgoauto.ie/sitemap.xml`)
- [ ] Verify structured data with Google Rich Results Test
- [ ] Replace SVG placeholders with real photos
- [ ] Set up custom domain DNS
- [ ] Test all pages on mobile

## Project structure

```
ironframe-auto-site/
  index.html
  panel-beating-dundalk.html
  chassis-alignment-dundalk.html
  structural-car-repair-dundalk.html
  car-frame-straightening.html
  trade-partners.html
  panel-beater-drogheda.html
  panel-beater-ardee.html
  panel-beater-newry.html
  panel-beater-monaghan.html
  panel-beater-navan.html
  panel-beater-carlingford.html
  crash-repair-cost-ireland.html
  insurance-approved-repairer.html
  split-repair-guide.html
  404.html
  robots.txt
  sitemap.xml
  _headers
  .gitignore
  README.md
  assets/
    css/
      styles.css
    js/
      main.js
    img/
      logo.svg
      logo-wordmark.svg
      favicon.svg
      og-default.svg
      placeholders/
        hero-blueprint.svg
        panel-damage-before.svg
        panel-damage-after.svg
        chassis-jig.svg
        coverage-map.svg
```
