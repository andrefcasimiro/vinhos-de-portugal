// @flow
import React from "react"
import AddCountry from "components/Buttons/AddCountry"
import {
  Wrap,
} from "./styled"

type Props = {
  children: React.Node,
}

const UserTools = ({ children }: Props) => {
  return (
    <Wrap>
      <AddCountry />
    </Wrap>
  )
}

export default UserTools
