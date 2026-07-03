import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import en from "./assets/translations/lang_en.json";
import fr from "./assets/translations/lang_fr.json";

type Locale = "en" | "fr";

type TranslationValue = string | string[] | Record<string, unknown>;

type TranslationDictionary = Record<string, TranslationValue>;

const translations: Record<Locale, TranslationDictionary> = {
  en,
  fr,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string | string[];
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLocale = window.localStorage.getItem("locale");
  if (storedLocale === "fr" || storedLocale === "en") {
    return storedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function lookupTranslation(
  locale: Locale,
  key: string,
): string | string[] | undefined {
  const segments = key.split(".");
  let current: TranslationDictionary | undefined = translations[locale];

  for (const segment of segments) {
    // console.log("Current:", current, "Segment:", segment);
    if (current == null || typeof current !== "object") {
      return undefined;
    }

    current = current[segment] as TranslationDictionary | undefined;
  }

  return Array.isArray(current) || typeof current === "string"
    ? current
    : undefined;
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale());

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "fr" : "en")),
      t: (key: string) => lookupTranslation(locale, key) ?? key,
    }),
    [locale],
  );

  return createElement(I18nContext.Provider, { value }, children);
}

export function useTranslation() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
}
