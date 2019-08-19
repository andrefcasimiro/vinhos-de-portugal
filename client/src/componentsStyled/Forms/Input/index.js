// @flow
import React from "react"
import {
  InputWrap,
  Label,
  Error,
  StyledInput,
} from "./styled"

const Input = ({ name, label, onChange, value, errorMessage }) => (
  <InputWrap>
    <Label>{label}</Label>
    <StyledInput
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    />
    {errorMessage && <Error>{errorMessage}</Error>}
  </InputWrap>
)

export default Input
