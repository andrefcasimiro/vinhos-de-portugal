// @flow
import React, { useGlobal } from "reactn"
import AddCountry from "components/Buttons/AddCountry"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
import {
  Wrap,
} from "./styled"

type Props = {
  children: React.Node,
}

const UserTools = ({ children }: Props) => {
  const [language] = useGlobal("language")

  return (
    <Wrap>
      <AddCountry />
    </Wrap>
  )
}

export default UserTools
