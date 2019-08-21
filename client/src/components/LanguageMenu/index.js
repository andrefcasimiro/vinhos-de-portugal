// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import { connect } from "react-redux"
import { selectLanguage } from "data/languages/selectors"
import { applyLanguage } from "data/languages/actions"
import { languages } from "data/languages/constants"
import { LanguageMenuContainer, LanguageButton } from "./styled"

const LanguageMenu = ({ language, applyLanguage }) => (
  <LanguageMenuContainer>
    <LanguageButton
      active={language === languages.ENGLISH}
      onClick={() => applyLanguage(languages.ENGLISH)}
    >
      EN
    </LanguageButton>
    <LanguageButton
      active={language === languages.PORTUGUESE}
      onClick={() => applyLanguage(languages.PORTUGUESE)}
    >
      PT
    </LanguageButton>
  </LanguageMenuContainer>
)

const mapStateToProps = state => {
  const language = selectLanguage(state)

  return {
    language,
  }
}

const mapDispatchToProps = {
  applyLanguage,
}

const enhancer: HOC<*, {||}> = compose(
  connect(mapStateToProps, mapDispatchToProps),
)

export default enhancer(LanguageMenu)
