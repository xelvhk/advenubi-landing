export const supportedLocales = ['ru', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeStorageKey = 'advenubi.landing-locale.v1';

type ReadableStorage = Pick<Storage, 'getItem'>;
type WritableStorage = Pick<Storage, 'setItem'>;

export function readStoredLocale(storage: ReadableStorage): string | null {
  try {
    return storage.getItem(localeStorageKey);
  } catch {
    return null;
  }
}

export function storeLocale(storage: WritableStorage, locale: Locale): void {
  try {
    storage.setItem(localeStorageKey, locale);
  } catch {
    // Language switching must still work when a browser blocks persistence.
  }
}

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
