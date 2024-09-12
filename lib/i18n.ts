import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["", "en", "en-US", "zh", "zh-CN", "zh-TW", 'zh-HK', 'ja', "es", "ru"];
export const localeNames: any = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  ru: "Русский",
};
export const defaultLocale = "en";

export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}
const dictionaries: any = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  zh: () => import('@/locales/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};
