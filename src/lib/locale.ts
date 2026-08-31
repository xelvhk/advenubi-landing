export const supportedLocales = ['ru', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeStorageKey = 'advenubi.landing-locale.v1';

export function isLocale(value: string | null): value is Locale {
  return value === 'ru' || value === 'en';
}

export function resolveInitialLocale(
  savedLocale: string | null,
  browserLocale: string,
): Locale {
  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  return browserLocale.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function toggleLocale(locale: Locale): Locale {
  return locale === 'ru' ? 'en' : 'ru';
}
