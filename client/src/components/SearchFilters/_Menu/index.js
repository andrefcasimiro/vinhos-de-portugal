// @flow
import React from "react"
import ContextMenu from "components/ContextMenu"
import Controls from "components/Controls"

type Props = {|
  children: React.Node,
  isOpen: boolean,
  close: Function,
  withControls?: boolean,
  parameterKey?: string,
  localValues?: mixed, // filter to be applied in the search state
|}

const Menu = ({ children, isOpen, close, withControls = true, parameterKey, localValues = {} }: Props) => {
  return (
    <ContextMenu isOpen={isOpen} close={close}>
      {children}
      {withControls && <Controls isOpen={isOpen} close={close} parameterKey={parameterKey} localValues={localValues} />}
    </ContextMenu>
  )
}

export default Menu
