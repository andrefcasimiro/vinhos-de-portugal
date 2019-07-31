// @flow
import React from "react"
import {
  StyledButton,
} from "./styled"

type Props = {|
  children: React.Node,
  onClick: Function,
|}

const Button = ({ children, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
