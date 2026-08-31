import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { App } from './App';
import { localeStorageKey } from './lib/locale';

describe('AdveNubi landing', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = '';
  });

  it('renders the Russian experience and current pilot boundary', () => {
    render(<App initialLocale="ru" />);

    expect(
      screen.getByRole('heading', { name: 'Языки начинаются с приключения' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Android MVP для закрытого пилота')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /скачать/i })).not.toBeInTheDocument();
    expect(document.documentElement.lang).toBe('ru');
  });

  it('switches the full page to English and remembers the choice', () => {
    render(<App initialLocale="ru" />);

    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }));

    expect(
      screen.getByRole('heading', { name: 'Every language starts with an adventure' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Переключить на русский' })).toBeInTheDocument();
    expect(window.localStorage.getItem(localeStorageKey)).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('connects every labelled section to an existing heading', () => {
    const { container } = render(<App initialLocale="ru" />);

    for (const section of container.querySelectorAll<HTMLElement>('[aria-labelledby]')) {
      const headingId = section.getAttribute('aria-labelledby');

      expect(headingId).not.toBeNull();
      expect(document.getElementById(headingId!)).toBeInTheDocument();
    }
  });
});
