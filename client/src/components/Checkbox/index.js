// @flow
import React from "react"
import { compose, type HOC, withStateHandlers, withHandlers } from "recompose"
import Checked from "assets/svgs/Checked"
import {
  CheckboxWrap,
  Label,
  CheckboxInput,
} from "./styled"

type Props = {|
  children: React.Node,
  isChecked: boolean,
  toggleIsChecked: Function,
  onChange: Function,
|}

const Checkbox = ({ children, isChecked, handleSelect }) => {
  return (
    <CheckboxWrap onClick={() => handleSelect(children)}>
      <Label>{children}</Label>
      <CheckboxInput>
        {isChecked && <Checked />}
      </CheckboxInput>
    </CheckboxWrap>
  )
}

const enhancer: HOC<*, Props> = compose(
  withStateHandlers(
    ({ isChecked }) => ({
      isChecked: isChecked || false,
    }),
    {
      toggleIsChecked: (props) => (isChecked: boolean) => ({ isChecked: !props.isChecked }),
    },
  ),
  withHandlers({
    handleSelect: props => event => {
      if (props.onChange) {
        props.onChange(event)
      }

      return props.toggleIsChecked()
    }
  }),
)

export default enhancer(Checkbox)
