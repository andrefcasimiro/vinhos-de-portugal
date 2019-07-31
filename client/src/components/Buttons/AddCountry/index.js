// @flow
import React, { useGlobal } from "reactn"
import withOpen from "hocs/withOpen"
import Button from "componentsStyled/Button"
import AddCountry from "modals/AddCountry"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"

const UserTools = ({ children, isOpen, toggleOpen }) => {
  const [language] = useGlobal("language")

  return (
    <React.Fragment>
      {isOpen && <AddCountry close={toggleOpen} />}
      <Button onClick={toggleOpen}>
        {getText(language, dictionaryKeys.ADD_COUNTRY)}
      </Button>
    </React.Fragment>
  )
}

export default withOpen(UserTools)
