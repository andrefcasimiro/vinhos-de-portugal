// @flow
import React from "react"
import {
  NavbarContainer,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const Navbar = ({ children }: Props) => {

  return (
    <NavbarContainer>
      {children}
    </NavbarContainer>
  )
}

export default Navbar
