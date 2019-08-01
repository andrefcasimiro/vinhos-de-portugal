// @flow
import React from "react"
import ContextMenu from "components/ContextMenu"
import Controls from "components/Controls"

type Props = {|
  children: React.Node,
  isOpen: boolean,
  close: Function,
  withControls?: boolean,
|}

const Menu = ({ children, isOpen, close, withControls = true }: Props) => {
  return (
    <ContextMenu isOpen={isOpen} close={close}>
      {children}
      {withControls && <Controls isOpen={isOpen} close={close} />}
    </ContextMenu>
  )
}

export default Menu
