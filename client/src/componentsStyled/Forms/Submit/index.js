// @flow
import React from "react"
import {
  SubmitWrap,
  SubmitButton,
} from "./styled"

const Submit = ({ onClick, children, disabled }) => (
  <SubmitWrap>
    <SubmitButton onClick={onClick} disabled={disabled}>{children}</SubmitButton>
  </SubmitWrap>
)

export default Submit
