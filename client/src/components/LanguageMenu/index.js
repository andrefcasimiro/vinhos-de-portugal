// @flow
import React, { useGlobal } from "reactn"
import { languages } from "data/languages/constants"
import { LanguageMenuContainer, LanguageButton } from "./styled"
import { sessionItems } from "data/sessions/constants"

const LanguageMenu = () => {
  const [language, setLanguage] = useGlobal("language")
  console.log(sessionStorage)
  return (
    <LanguageMenuContainer>
      <LanguageButton
        active={language === languages.ENGLISH}
        onClick={() => {
          setLanguage(languages.ENGLISH)
          return sessionStorage.setItem(sessionItems.LANGUAGE, languages.ENGLISH)
        }}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={language === languages.PORTUGUESE}
        onClick={() => {
          setLanguage(languages.PORTUGUESE)
          return sessionStorage.setItem(sessionItems.LANGUAGE, languages.PORTUGUESE)
        }}
      >
        PT
      </LanguageButton>
    </LanguageMenuContainer>
  )
}

export default LanguageMenu
