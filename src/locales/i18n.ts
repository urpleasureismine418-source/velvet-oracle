import { useEffect, useState } from 'react';
import en from './en.json';
import zh from './zh-CN.json';
export type Locale = 'en' | 'zh-CN';
const catalogs: Record<Locale, Record<string, string>> = { en, 'zh-CN': zh };
export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try { return localStorage.getItem('velvet-oracle-locale') === 'en' ? 'en' : 'zh-CN'; }
    catch { return 'zh-CN'; }
  });
  useEffect(() => { document.documentElement.lang = locale; try { localStorage.setItem('velvet-oracle-locale', locale); } catch { /* storage unavailable */ } }, [locale]);
  const setLocale = (next: Locale) => setLocaleState(next);
  const t = (key: string) => catalogs[locale][key] || key;
  return { locale, setLocale, t };
}
