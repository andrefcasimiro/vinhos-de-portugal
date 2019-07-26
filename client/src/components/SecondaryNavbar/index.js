// @flow
import React from "react"
import {
  SecondaryNavbarContainer,
  ContentWrap,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const SecondaryNavbar = ({ children }: Props) => {

  return (
    <SecondaryNavbarContainer>
      <ContentWrap>
        {children}
      </ContentWrap>
    </SecondaryNavbarContainer>
  )
}

export default SecondaryNavbar
