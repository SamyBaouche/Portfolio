import { useState, useEffect } from 'react';

/**
 * Manages dark / light theme.
 * - Persists choice in localStorage
 * - Falls back to system preference (prefers-color-scheme)
 * - Applies data-theme="light"|"dark" to <html>
 */
export function useTheme() {
  const getInitial = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState(() => {
    // SSR-safe guard
    if (typeof window === 'undefined') return 'dark';
    return getInitial();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
