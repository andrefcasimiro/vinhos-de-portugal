// @flow
import React from "react"
import {
  StyledButton,
} from "./styled"

type Props = {|
  children: React.Node,
  onClick: Function,
  active?: boolean,
|}

const SearchButton = ({ children, onClick, active }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={active} active={active}>
      {children}
    </StyledButton>
  )
}

export default SearchButton
