import { describe, expect, it } from 'vitest';
import {
  readStoredLocale,
  resolveInitialLocale,
  storeLocale,
  toggleLocale,
} from './locale';

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

  it('falls back safely when locale storage cannot be read', () => {
    const storage = {
      getItem: () => {
        throw new DOMException('Storage is blocked', 'SecurityError');
      },
    };

    expect(readStoredLocale(storage)).toBeNull();
  });

  it('does not interrupt the page when locale storage cannot be written', () => {
    const storage = {
      setItem: () => {
        throw new DOMException('Storage is blocked', 'SecurityError');
      },
    };

    expect(() => storeLocale(storage, 'en')).not.toThrow();
  });
});
