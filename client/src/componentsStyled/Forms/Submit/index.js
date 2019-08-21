// @flow
import React from "react"
import {
  SubmitWrap,
  SubmitButton,
} from "./styled"
import Spinner from "componentsStyled/Spinner"

const Submit = ({ onClick, children, disabled, loading }) => (
  <SubmitWrap>
    <SubmitButton type="submit" onClick={onClick} disabled={disabled || loading}>
      {children}
      {loading && <Spinner />}
    </SubmitButton>
  </SubmitWrap>
)

export default Submit
