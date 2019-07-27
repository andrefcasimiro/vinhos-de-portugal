// @flow
import React from "react"
import {
  StyledButton,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const Button = ({ children }: Props) => {

  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button
