const DefaultLanguage = 'en_INT'
const Languages = {
  en_INT: {
    title: 'English',
  },
  ru_RU: {
    title: 'Русский',
  },
} as const

export const useLanguagesStore = defineStore(
  'languages',
  () => {
    const lang = ref<keyof typeof Languages>(DefaultLanguage)
    const language = computed(() => Languages[lang.value])

    return {
      lang,
      language,
    }
  },
  {
    persist: true,
  }
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLanguagesStore, import.meta.hot))
}
