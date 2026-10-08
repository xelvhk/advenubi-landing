# AdveNubi Landing

[English version](README.md)

Публичный двуязычный лендинг для AdveNubi: Android-first MVP для языковой практики детей 4-6 лет.

![Nubi starts a language-learning adventure](public/assets/hero-nubi.webp)

## Проблема

- Детскому языковому MVP нужна понятная публичная страница без преждевременных обещаний о релизе.
- Родителям важно быстро увидеть возраст, формат занятий, приватность и границы продукта.
- Лендинг должен быть доступным, мобильным и проверяемым через CI.

## Стек

- React 19, TypeScript, Vite
- Vitest, Testing Library, ESLint
- GitHub Pages artifact deployment
- Responsive WebP assets, локальные variable fonts
- RU/EN content с persisted locale selection

## Setup

```bash
git clone https://github.com/xelvhk/advenubi-landing.git
cd advenubi-landing
npm ci
npm run dev
```

Основные команды:

```bash
npm test -- --run
npm run lint
npm run build
npm run preview
npm run test:browser
```

Файл `.env` не требуется.

## Архитектура

```text
src/App.tsx          UI лендинга и секции страницы
src/content.ts       RU/EN продуктовый контент
src/styles.css       responsive visual system
scripts/             real-browser quality check
docs/spec.md         product/design/testing contract
public/              legal pages, sitemap, robots, assets
.github/workflows    quality gate и Pages deploy
```

## Demo

- Production: [https://xelvhk.github.io/advenubi-landing/](https://xelvhk.github.io/advenubi-landing/)
- Legal pages: `privacy.html`, `terms.html`
- Screenshot placeholder: добавить `docs/screenshots/home.png` после следующего visual QA.

## Product Boundary

AdveNubi сейчас описывается как приватный Android pilot. Лендинг не заявляет публичный app-store release, pricing, testimonials или usage metrics.

## Roadmap

- [ ] Добавить актуальные screenshots MVP.
- [ ] Обновить product proof после следующего Android-среза.
- [ ] Добавить короткий demo clip или GIF с flow одного упражнения.

## Статус

Active development

## Лицензия

Код доступен по условиям [LICENSE-CODE](LICENSE-CODE). AdveNubi, Nubi и artwork исключены из этой лицензии; см. [ASSETS-LICENSE.md](ASSETS-LICENSE.md).
