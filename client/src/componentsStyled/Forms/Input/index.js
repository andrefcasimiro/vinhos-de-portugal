// @flow
import React from "react"
import withField from "hocs/withField"
import {
  InputWrap,
  Label,
  Error,
  StyledInput,
} from "./styled"

const Input = ({ name, label, value, onChange, error }) => (
  <InputWrap>
    <Label>{label}</Label>
    <StyledInput
      name={name}
      label={label}
      onChange={onChange}
      value={value}
    />
    {error && <Error>{error}</Error>}
  </InputWrap>
)

export default withField(Input)
