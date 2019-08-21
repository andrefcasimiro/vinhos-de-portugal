// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import { connect } from "react-redux"
import withOpen from "hocs/withOpen"
import Button from "componentsStyled/Button"
import AddCountry from "modals/AddCountry"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
import { selectLanguage } from "data/languages/selectors"

const UserTools = ({ children, isOpen, toggleOpen, language }) => {
  return (
    <React.Fragment>
      {isOpen && <AddCountry close={toggleOpen} />}
      <Button onClick={toggleOpen}>
        {getText(language, dictionaryKeys.ADD_COUNTRY)}
      </Button>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const language = selectLanguage(state)

  return {
    language,
  }
}

const enhancer: HOC<*, {||}> = compose(
  withOpen,
  connect(mapStateToProps),
)

export default enhancer(UserTools)
