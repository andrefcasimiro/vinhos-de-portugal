// @flow
import React, { useGlobal } from "reactn"
import Button from "componentsStyled/Button"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
import {
  Wrap,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const UserTools = ({ children }: Props) => {
  const [language] = useGlobal("language")

  return (
    <Wrap>
      <Button>
        {getText(language, dictionaryKeys.ADD_WINE)}
      </Button>
      <Button>
        {getText(language, dictionaryKeys.ADD_COUNTRY)}
      </Button>
      <Button>
        {getText(language, dictionaryKeys.ADD_REGION)}
      </Button>
    </Wrap>
  )
}

export default UserTools
