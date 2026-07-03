import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function applyTheme(theme: Theme) {
  if (!isBrowser()) return;
  document.documentElement.setAttribute("data-theme", theme);
}

function getStoredTheme(): Theme | null {
  if (!isBrowser()) return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" || stored === "light" ? stored : null;
}

function getPreferredTheme(): Theme {
  if (!isBrowser()) return DEFAULT_THEME;

  const stored = getStoredTheme();
  if (stored) {
    return stored;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function loadTheme(): Theme {
  const theme = getPreferredTheme();
  applyTheme(theme);
  return theme;
}

export function setTheme(theme: Theme): Theme {
  if (isBrowser()) {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }
  applyTheme(theme);
  return theme;
}

export function toggleTheme(): Theme {
  const nextTheme = loadTheme() === "dark" ? "light" : "dark";
  return setTheme(nextTheme);
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setThemeState(event.newValue === "dark" ? "dark" : "light");
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [theme]);

  const toggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemeState(nextTheme);
    if (isBrowser()) {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
  };

  return { theme, toggle };
}
