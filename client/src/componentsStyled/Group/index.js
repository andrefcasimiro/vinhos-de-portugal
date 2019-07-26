// @flow
import React from "react"
import {
  Wrapper,
  Item,
} from "../Grid/styled"

type Props = {|
  children: React.Node,
|}

/**
 * Receives a list of items and wraps them in one div.
 * Utility for Grid to know that this is a list of items.
 * @param {React.Node} children - set of items to be grouped in the Wrapper
 */
const Group = ({ children }: Props) => {
  if (!Array.isArray(children)) {
    return null
  }

  return (
    <Wrapper>
      {children.map((child, index) =>
        <Item key={index}>{child}</Item>
      )}
    </Wrapper>
  )
}

export default Group
