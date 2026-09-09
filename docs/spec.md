# Spec: AdveNubi Public Landing

## Objective

Create a public, bilingual product landing page for AdveNubi that explains the
Android-first language-learning MVP to parents and demonstrates portfolio-grade
frontend execution. The page must communicate the current product boundary
honestly: AdveNubi is a private pilot, not a publicly downloadable app.

## Audience

- Parents and caregivers of children aged 4-6.
- Educators and pilot participants evaluating the learning approach.
- Hiring reviewers assessing product thinking, accessibility, and frontend craft.

## Tech Stack

- React 19 and TypeScript.
- Vite 8 for development and production builds.
- Native CSS with semantic design tokens. No component framework.
- Vitest and Testing Library for behavioral tests.
- GitHub Actions and GitHub Pages for public hosting.

## Commands

```bash
npm install
npm run dev
npm test -- --run
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/                 React application and content
src/lib/             Small framework-independent utilities
public/assets/       Optimized, publication-safe brand artwork
docs/                Product specification and decisions
.github/workflows/   Quality and Pages deployment workflows
```

## Code Style

Use small typed components, semantic HTML, data-driven bilingual content, and
CSS custom properties for design tokens.

```tsx
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="sectionTitle">{children}</h2>;
}
```

## Testing Strategy

- Unit tests cover locale selection and persistence rules.
- Component tests cover language switching, navigation labels, and current
  pilot disclosure.
- Production build and linting are required before every publish.
- Real-browser checks cover 320px, 768px, 1024px, and 1440px, both color
  schemes, keyboard navigation, reduced motion, console output, and overflow.

## Design Direction

Reading: a child-focused consumer landing for parents, with a playful but
trust-first visual language built around the existing Nubi character.

- Design variance: 8/10, with asymmetric editorial composition.
- Motion intensity: 5/10, limited to hierarchy and interaction feedback.
- Visual density: 4/10, concise and easy to scan.
- Palette: Nubi teal, sunny yellow, coral, leaf green, and cool neutrals.
- Type: rounded sans-serif, locally served, readable in Cyrillic and Latin.
- Shape rule: 16px surfaces, pill controls, circular decorative tokens.
- Theme: system light/dark mode with one visual language across the page.

## Boundaries

- Always: use source-derived claims, accessible semantics, responsive layouts,
  reduced-motion support, optimized assets, and clean build/test/lint gates.
- Ask first: adding analytics, lead forms, external trackers, a public download
  CTA, or changing the product's legal positioning.
- Never: publish secrets, child data, fake testimonials, fake usage metrics,
  pricing, fabricated store availability, or private pilot evidence.

## Success Criteria

1. RU and EN content can be switched from an accessible control.
2. The selected locale is reflected in the document language and remembered.
3. The hero and primary CTA fit in the initial desktop and mobile viewport.
4. The page uses real AdveNubi imagery and contains no fake product screenshot.
5. Current privacy facts and pilot status match the application documentation.
6. The page has no horizontal overflow at the required breakpoints.
7. Tests, lint, type checking, production build, and browser checks pass.
8. A public GitHub repository and GitHub Pages deployment are created.

## Publication Details

- Legal publisher: Алексей Хведченя.
- Public developer name: AdveNubi.
- Support: `advenubi@gmail.com`.
- Public Privacy Policy and Terms are hosted by this GitHub Pages deployment.
- A store link remains intentionally absent until the Android listing is live.
