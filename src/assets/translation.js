import { ref } from 'vue'

const currentLanguage = ref('en')
const translations = ref({})

async function loadTranslations(lang) {
  const response = await import(`./languages/language_${lang}.json`)
  translations.value = response.default // Access default for ES module imports
}

function setLanguage(lang) {
  currentLanguage.value = lang
  loadTranslations(lang)
}

setLanguage(currentLanguage.value)

export { translations, setLanguage, currentLanguage }
