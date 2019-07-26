// @flow
import React from "react"
import {
  Wrapper,
  Item,
} from "./styled"

type Props = {||}

/**
 * Receives a groups of items to be spaced-out horizontally
 * e.g. A navbar with 2 groups of links spaced at the start and end of the container
 * @param {React.Node} children - The list of grouped items to be spaced apart
 */
const Grid = ({ children }: Props) => {
  if (!Array.isArray(children)) {
    return children
  }

  return (
    <Wrapper>
      {children.map((child, index) =>
        <Item key={index}>{child}</Item>
      )}
    </Wrapper>
  )
}

export default Grid
