# AdveNubi Landing

[Русская версия](README.ru.md)

Public bilingual landing page for AdveNubi, an Android-first language-practice MVP for children aged 4-6.

![Nubi starts a language-learning adventure](public/assets/hero-nubi.webp)

## Problem

- A children's language-practice MVP needs a clear public page without premature release claims.
- Parents need to understand age range, practice format, privacy boundaries, and product status quickly.
- The landing page should be accessible, mobile-first, and verified through CI.

## Stack

- React 19, TypeScript, Vite
- Vitest, Testing Library, ESLint
- GitHub Pages artifact deployment
- Responsive WebP assets and local variable fonts
- RU/EN content with persisted locale selection

## Setup

```bash
git clone https://github.com/xelvhk/advenubi-landing.git
cd advenubi-landing
npm ci
npm run dev
```

Main commands:

```bash
npm test -- --run
npm run lint
npm run build
npm run preview
npm run test:browser
```

No `.env` file is required.

## Architecture

```text
src/App.tsx          landing UI and page sections
src/content.ts       RU/EN product content
src/styles.css       responsive visual system
scripts/             real-browser quality check
docs/spec.md         product/design/testing contract
public/              legal pages, sitemap, robots, assets
.github/workflows    quality gate and Pages deploy
```

## Demo

- Production: [https://xelvhk.github.io/advenubi-landing/](https://xelvhk.github.io/advenubi-landing/)
- Legal pages: `privacy.html`, `terms.html`
- Screenshot placeholder: add `docs/screenshots/home.png` after the next visual QA pass.

## Product Boundary

AdveNubi is currently described as a private Android pilot. The landing does not claim a public app-store release, pricing, testimonials, or usage metrics.

The current MVP offers:

- no-reading practice through sound and large pictures;
- voice response or a microphone-free picture route;
- three playable Adventures with thirty bundled English words;
- Russian and English interface copy;
- local progress with no AdveNubi accounts, ads, analytics, or backend;
- adult-controlled settings and an adult gate.

## Roadmap

- [ ] Add current MVP screenshots.
- [ ] Refresh product proof after the next Android slice.
- [ ] Add a short demo clip or GIF for one exercise flow.

## Status

Active development

## License

Source code is available under [LICENSE-CODE](LICENSE-CODE). AdveNubi, Nubi, and the artwork are excluded from that grant; see [ASSETS-LICENSE.md](ASSETS-LICENSE.md).
