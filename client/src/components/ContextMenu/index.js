// @flow
import React from "react"
import { Wrapper, Content } from "./styled"

type Props = {|
  children: React.Node,
  isOpen: boolean,
  close: Function,
|}

const ContextMenu = ({ children, isOpen, close }: Props) => isOpen
  ? <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  : null

export default ContextMenu
