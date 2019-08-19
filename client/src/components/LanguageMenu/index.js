// @flow
import React, { useGlobal } from "reactn"
import { languages } from "data/languages/constants"
import { sessionItems } from "data/sessions/constants"
import { LanguageMenuContainer, LanguageButton } from "./styled"

const LanguageMenu = () => {
  const [language, setLanguage] = useGlobal("language")

  return (
    <LanguageMenuContainer>
      <LanguageButton
        active={language === languages.ENGLISH}
        onClick={() => {
          setLanguage(languages.ENGLISH)
          return localStorage.setItem(sessionItems.LANGUAGE, languages.ENGLISH)
        }}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={language === languages.PORTUGUESE}
        onClick={() => {
          setLanguage(languages.PORTUGUESE)
          return localStorage.setItem(sessionItems.LANGUAGE, languages.PORTUGUESE)
        }}
      >
        PT
      </LanguageButton>
    </LanguageMenuContainer>
  )
}

export default LanguageMenu
