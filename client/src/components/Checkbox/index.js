// @flow
import React from "react"
import withOpen from "hocs/withOpen"
import ContextMenu from "components/ContextMenu"
import type { Country } from "data/countries/types"
import {
  CheckboxWrap,
  Label,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const Checkbox = ({ children }: Props) => {

  return (
    <CheckboxWrap>
      <Label>{children}</Label>
    </CheckboxWrap>
  )
}

export default Checkbox
