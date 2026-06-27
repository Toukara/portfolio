// TRANSLATIONS
const translations = {
  fr: null,
  en: null,
};

let currentLang = document.documentElement.lang || "fr";

async function loadTranslations() {
  const [frJson, enJson] = await Promise.all([
    fetch("./translations/lang_fr.json").then((res) => {
      if (!res.ok)
        throw new Error(`Failed to load fr translations: ${res.status}`);
      return res.json();
    }),
    fetch("./translations/lang_en.json").then((res) => {
      if (!res.ok)
        throw new Error(`Failed to load en translations: ${res.status}`);
      return res.json();
    }),
  ]);

  translations.fr = frJson;
  translations.en = enJson;
  applyTranslations(currentLang);
}

loadTranslations().catch((error) => console.error(error));

// Typewriter with cancellation support: ensures only one instance runs per element
function typeWriter(
  element,
  texts,
  { writeSpeed = 100, eraseSpeed = 50, delay = 2000 } = {},
) {
  // stop any existing typewriter on this element
  if (element._typeWriterCancel) {
    element._typeWriterCancel();
  }

  let cancelled = false;
  const timers = new Set();

  function clearAll() {
    cancelled = true;
    timers.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    timers.clear();
    element._typeWriterCancel = null;
  }

  element._typeWriterCancel = clearAll;

  function setIntervalSafe(fn, t) {
    const id = setInterval(fn, t);
    timers.add(id);
    return id;
  }

  function setTimeoutSafe(fn, t) {
    const id = setTimeout(fn, t);
    timers.add(id);
    return id;
  }

  function writeText(text) {
    return new Promise((resolve) => {
      let i = 0;
      element.textContent = "";
      const iv = setIntervalSafe(() => {
        if (cancelled) {
          clearInterval(iv);
          resolve();
          return;
        }
        if (i < text.length) {
          element.textContent = text.slice(0, i + 1);
          i++;
        } else {
          clearInterval(iv);
          resolve();
        }
      }, writeSpeed);
    });
  }

  function eraseText(text) {
    return new Promise((resolve) => {
      let i = text.length - 1;
      const iv = setIntervalSafe(() => {
        if (cancelled) {
          clearInterval(iv);
          resolve();
          return;
        }
        if (i >= 0) {
          element.textContent = text.substring(0, i);
          i--;
        } else {
          clearInterval(iv);
          resolve();
        }
      }, eraseSpeed);
    });
  }

  // run loop asynchronously
  (async function loop() {
    let idx = 0;
    while (!cancelled) {
      const current = texts[idx];
      await writeText(current);
      if (cancelled) break;
      // pause before erasing
      await new Promise((res) => setTimeoutSafe(res, delay));
      if (cancelled) break;
      await eraseText(current);
      if (cancelled) break;
      idx = (idx + 1) % texts.length;
      // small pause before next
      await new Promise((res) => setTimeoutSafe(res, 120));
    }
  })();
}

function getNestedTranslation(obj, key) {
  return key.split(".").reduce((value, segment) => {
    if (value && typeof value === "object" && segment in value) {
      return value[segment];
    }
    return undefined;
  }, obj);
}

function applyTranslations(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = getNestedTranslation(translations[lang], key);

    if (translation !== undefined) {
      if (Array.isArray(translation)) {
        typeWriter(el, translation, {
          writeSpeed: 100,
          eraseSpeed: 50,
          delay: 2000,
        });
      } else {
        if (el._typeWriterCancel) el._typeWriterCancel();
        el.textContent = translation;
      }
    }
  });
  document.documentElement.lang = lang;
}

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  document.getElementById("lang-label").textContent =
    currentLang === "fr" ? "EN" : "FR";
  applyTranslations(currentLang);
});

/*  DARK / LIGHT  */
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const moonSVG = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
const sunSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
let dark = true;

document.documentElement.setAttribute("data-theme", "dark");
themeIcon.innerHTML = sunSVG;

themeBtn.addEventListener("click", () => {
  dark = !dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  themeIcon.innerHTML = dark ? sunSVG : moonSVG;
});

/*  NAV SCROLL   */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

/*  REVEAL ON SCROLL   */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/*  SKILL BARS ANIMATION   */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".skill-fill").forEach((fill) => {
          fill.style.width = fill.dataset.w + "%";
        });
        barObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".skills-grid")
  .forEach((el) => barObserver.observe(el));

// CUSTOM CURSOR
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// GO TOP BUTTON
const goTopBtn = document.getElementById("goTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
});
