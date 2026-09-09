# AdveNubi Landing

Public bilingual landing page for AdveNubi, an Android-first language-practice
MVP for children aged 4-6.

![Nubi starts a language-learning adventure](public/assets/hero-nubi.webp)

## Product boundary

AdveNubi is currently a private Android pilot. The landing does not claim a
public app-store release, pricing, testimonials, or usage metrics.

The current MVP offers:

- no-reading practice through sound and large pictures;
- voice response or a microphone-free picture route;
- three playable Adventures with thirty bundled English words;
- Russian and English interface copy;
- local progress with no AdveNubi accounts, ads, analytics, or backend;
- adult-controlled settings and an adult gate.

## Frontend quality

- React 19, TypeScript, and Vite.
- Source-derived RU and EN content with persisted locale selection.
- Accessible mobile section navigation with Escape-key support.
- Locale switching remains available when browser storage is blocked.
- Responsive asymmetric layouts at 320, 768, 1024, and 1440 px.
- System light and dark themes with reduced-motion support.
- Semantic landmarks, skip navigation, visible focus, and 44 px targets.
- Responsive WebP artwork and locally served variable fonts.
- Unit, component, lint, build, browser, and dependency-audit gates.

## Commands

```bash
npm ci
npm run dev
npm test -- --run
npm run lint
npm run build
npm run preview
```

With the production preview running at port 4173, the local Chrome quality gate
uses the installed Google Chrome application:

```bash
npm run test:browser
```

It verifies both locales, viewport overflow, the initial hero viewport,
keyboard entry, light and dark themes, reduced motion, image loading, and clean
console/network output. Screenshots are written to `/private/tmp`.

## Project structure

```text
src/                 React UI, bilingual content, tests, and locale utilities
public/assets/       Optimized publication assets
scripts/             Real-browser quality check
docs/spec.md         Product, design, testing, and publication contract
design-system/       Search-derived design-system record
.github/workflows/   CI quality gate and GitHub Pages deployment
```

## Deployment

Pushes to `main` run the quality workflow and publish `dist/` through the
official GitHub Pages artifact workflow.

Expected site URL:
`https://xelvhk.github.io/advenubi-landing/`

Published support and legal endpoints:

- `mailto:advenubi@gmail.com`
- `https://xelvhk.github.io/advenubi-landing/privacy.html`
- `https://xelvhk.github.io/advenubi-landing/terms.html`

## Licensing

Source code is available under the MIT terms in [LICENSE-CODE](LICENSE-CODE).
AdveNubi, Nubi, and the artwork are excluded from that grant; see
[ASSETS-LICENSE.md](ASSETS-LICENSE.md).
