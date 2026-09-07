import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/nunito';
import { App } from './App';
import { readStoredLocale, resolveInitialLocale } from './lib/locale';

const initialLocale = resolveInitialLocale(
  readStoredLocale(window.localStorage),
  window.navigator.language,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialLocale={initialLocale} />
  </StrictMode>,
);
