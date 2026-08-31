import { describe, expect, it } from 'vitest';
import { resolveInitialLocale, toggleLocale } from './locale';

describe('locale selection', () => {
  it('uses a supported saved locale before the browser locale', () => {
    expect(resolveInitialLocale('en', 'ru-RU')).toBe('en');
  });

  it('falls back to Russian for a Russian browser locale', () => {
    expect(resolveInitialLocale(null, 'ru-RU')).toBe('ru');
  });

  it('falls back to English for every other browser locale', () => {
    expect(resolveInitialLocale(null, 'de-DE')).toBe('en');
  });

  it('toggles between the two supported locales', () => {
    expect(toggleLocale('ru')).toBe('en');
    expect(toggleLocale('en')).toBe('ru');
  });
});
