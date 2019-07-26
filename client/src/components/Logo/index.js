// @flow
import React from "react"
import { LogoContainer } from "./styled"

type Props = {|
  children: React.Node | string,
|}

const Logo = ({ children }: Props) => {
  return (
    <LogoContainer>
      {children}
    </LogoContainer>
  )
}

export default Logo
