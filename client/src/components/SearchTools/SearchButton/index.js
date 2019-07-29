// @flow
import React from "react"
import {
  StyledButton,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const SearchButton = ({ children }: Props) => {

  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default SearchButton
