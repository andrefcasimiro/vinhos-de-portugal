// @flow
import React from "react"
import { StyledNavlink } from "./styled"

type Props = {|
  children: React.Node,
  to: string,
|}

const Navlink = ({ children, to }: Props) => {

  return (
    <StyledNavlink href={to}>{children}</StyledNavlink>
  )
}

export default Navlink
