"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  // Detect browser language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("ordemly-language") as Language
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("pt")) {
        setLanguageState("pt")
      } else if (browserLang.startsWith("es")) {
        setLanguageState("es")
      } else if (browserLang.startsWith("en")) {
        setLanguageState("en")
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("ordemly-language", lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
