"use client";
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import { commonLocale } from '@/lib/commonLocale';

type CommonLocale = Record<`LOCALE_${string}`, any>;

export function useLang(): { lang: string, locale: any } {

  const pathname = usePathname();
  const [lang, setLang] = useState(defaultLocale);
  const [locale, setLocale] = useState<any>({});

  useEffect(() => {
    const updateConfig = async () => {
      if (pathname === '/') {
        setLang(defaultLocale);
      } else {
        setLang(pathname.split('/')[1] || defaultLocale);
      }
      setLocale((commonLocale as CommonLocale)[`LOCALE_${lang.toUpperCase()}`] || {});
    };
    updateConfig();
  }, [pathname, lang]);

  return { lang, locale };
}
