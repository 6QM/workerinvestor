# The Worker Investor site content

This folder keeps the editable content for the static website.

## Common updates

To add a new article:

1. Open `site/content/site-content.mjs`.
2. Copy one object inside `posts`.
3. Change `slug`, `type`, `status`, `date`, `title`, `summary`, and `body`.
4. Run:

```bash
node site/tools/build-site.mjs
```

The build script regenerates:

- `site/index.html`
- `site/book/index.html`
- `site/resources/index.html`
- `site/library/index.html`
- `site/appendix/index.html`
- `site/cases/index.html`
- `site/concepts/index.html`
- `site/posts/<slug>/index.html`

The website remains plain static HTML/CSS/JS, so it can be uploaded to any basic VPS or static host.

## Design and roadmap docs

- `website-content-brief.md`: current content architecture and page responsibilities.
- `visual-reference-spec.md`: visual reference direction and asset requirements.
- `book-identity-system.md`: visual trust rules for the book/site.
- `implementation-series.md`: phased roadmap for book identity, landing page, living book, toolkit, trust layer, and launch system.

## Generated visual assets

SVG masters:

- `site/assets/twi-cover-front.svg`
- `site/assets/twi-book-mockup.svg`
- `site/assets/twi-social-card.svg`
- `site/assets/twi-web-reference.svg`

PNG exports:

- `site/assets/rendered/twi-cover-front.png`
- `site/assets/rendered/twi-book-mockup.png`
- `site/assets/rendered/twi-social-card.png`
- `site/assets/rendered/twi-web-reference.png`

The SVG files are the editable source of truth. The PNG files are preview/export artifacts.
